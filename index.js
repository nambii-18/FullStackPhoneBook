const express = require('express')
const app = express()

let persons = [
    {
      "name": "Arto Hellas",
      "number": "98765",
      "id": 1
    },
    {
      "name": "Ada Lovelace",
      "number": "39-44-5323523",
      "id": 2
    },
    {
      "name": "Dan Abramov",
      "number": "12-43-234345",
      "id": 3
    },
    {
      "name": "Mary Poppendieck",
      "number": "39-23-6423122",
      "id": 4
    }
  ]

app.use(express.json())

app.get('/api/persons', (req, res) => {
    res.send(persons)
})

app.get('/api/info', (req, res) => {
    const maxId = persons.length
    res.send(`<div>   \
    Phonebook has info of ${maxId} people <br>
    ${new Date()}\
    </div>`)
})

const port = 3001
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})