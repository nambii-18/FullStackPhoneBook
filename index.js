require('dotenv').config()
const express = require('express')
const app = express()
var morgan = require('morgan')
morgan.token('body', function (req, res) { return JSON.stringify(req.body) })
const cors = require('cors')
const Person = require('./models/person')

app.use(cors())
app.use(express.json())
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))

const errorHandler = (error, req, res, next) => {
    if (error.name === 'ValidationError') {
        return res.status(400).send({error: 'Content is missing'})
    }
    if (error.name === 'CastError' && error.kind === 'ObjectId') {
        return res.status(400).send({ error: 'malformatted id' })
    }
    next(error)
}
app.use(errorHandler)
app.use(express.static('build'))

app.get('/api/persons', (req, res) => {
    Person
        .find({})
        .then(result => {
            res.json(result.map(person => person.toJSON()))
        })
})

app.get('/api/persons/:id', (req, res, next) => {
    Person
        .findById(req.params.id)
        .then(result => {
            if(result){
                res.json(result.toJSON())
            }
            else{
                console.log("Not found in DB")
                res.status(404).end()
            }
        })
})

app.delete('/api/persons/:id', (req, res, next) => {
    Person
        .findByIdAndRemove(req.params.id)
        .then(result => res.status(204).end())
        .catch(error => next(error))
})

app.post('/api/persons', (req, res, next) => {
    const body = req.body
    if(!body.name || !body.number){
        return res.status(400).json({
            error: 'Content missing'
        })
    }
    const person = new Person({
        name: body.name,
        number: body.number
    })
    person
        .save()
        .then(result => res.json(result.toJSON()))
        .catch(error => {
            if(error.name === 'ValidationError'){
                // console.log(error)
                res.status(400).json({error: error.message})
            }
        })
})

app.put('/api/persons/:id', (req, res, next) => {
    const body = req.body
    const person = {
        name: body.name,
        number: body.number
    }

    Person
        .findByIdAndUpdate(req.params.id, person, {new: true, runValidators: true, context: 'query'})
        .then(result => {
            if(result){
                res.json(result.toJSON())
            }
            else{
                res.status(404).end()
            }
        })
        .catch(error => next(error))
})

app.get('/api/info', (req, res) => {
    Person
        .find({})
        .then(result => {
            res.send(`<div>   \
            Phonebook has info of ${result.length} people <br>
            ${new Date()}\
            </div>`)
        })
})

const unknownEndpoint = (req, res) => {
    res.status(404).send({ error: 'unknown endpoint' })
  }

app.use(unknownEndpoint)
const port = process.env.PORT
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})