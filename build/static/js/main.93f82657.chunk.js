(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{15:function(e,t,n){e.exports=n(37)},37:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),u=n(13),c=n.n(u),o=n(14),l=n(2),i=function(e){var t=e.filter,n=e.handleFilter;return r.a.createElement("div",null,r.a.createElement("h2",null,"Filter Shown with"),"name: ",r.a.createElement("input",{value:t,onChange:n}),r.a.createElement("br",null))},m=function(e){var t=e.handleSubmit,n=e.newName,a=e.handleNewName,u=e.newNumber,c=e.handleNewNumber;return r.a.createElement("form",{onSubmit:t},r.a.createElement("div",null,"name: ",r.a.createElement("input",{value:n,onChange:a}),r.a.createElement("br",null),"number: ",r.a.createElement("input",{value:u,onChange:c})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add")))},s=function(e){var t=e.persons,n=e.handleClick;return r.a.createElement("ul",null,t.map((function(e){return r.a.createElement("li",{key:e.id},e.name," ",e.number," ",r.a.createElement("button",{onClick:function(){return n(e.id)}},"delete")," ")})))},d=function(e){var t=e.message,n=e.error;if(null===t)return null;var a={background:"lightgrey",fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10};return a.color=n?"red":"green",r.a.createElement("div",{style:a},t)},f=n(3),h=n.n(f),b="http://localhost:3001/api/persons/",w=function(){return h.a.get(b).then((function(e){return e.data}))},p=function(e){return h.a.post(b,e).then((function(e){return e.data}))},E=function(e){return h.a.delete("".concat(b).concat(e))},v=function(e){return h.a.put("".concat(b).concat(e.id),e).then((function(e){return e.data}))},g=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],u=t[1],c=Object(a.useState)([]),f=Object(l.a)(c,2),h=f[0],b=f[1],g=Object(a.useState)(""),j=Object(l.a)(g,2),N=j[0],O=j[1],k=Object(a.useState)(""),y=Object(l.a)(k,2),S=y[0],C=y[1],I=Object(a.useState)(""),L=Object(l.a)(I,2),F=L[0],A=L[1],B=Object(a.useState)(null),J=Object(l.a)(B,2),T=J[0],x=J[1],z=Object(a.useState)(!1),D=Object(l.a)(z,2),P=D[0],R=D[1],W=function(){return w().then((function(e){u(e),b(e)}))};Object(a.useEffect)((function(){W().catch((function(e){R(!0),x("Network error I guess"),setTimeout((function(){return x(null)}),3e3)}))}),[]);var q=function(e,t){R(t),x(e),setTimeout((function(){return x(null)}),3e3)};return r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(d,{message:T,error:P}),r.a.createElement(i,{filter:S,handleFilter:function(e){var t=e.target.value;C(t),b(""===t?n:n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())})))}}),r.a.createElement("h2",null,"Add new"),r.a.createElement(m,{handleSubmit:function(e){e.preventDefault();var t={name:N,number:F},a=n.filter((function(e){return e.name.toLowerCase().includes(N.toLowerCase())}));0===a.length?p(t).then((function(e){W().then((function(e){q("".concat(N," was added successfully"),!1)})).catch((function(e){q("Network error I guess",!0)}))})):window.confirm("".concat(N," is already in phonebook. Would you like to update?"))&&(t=Object(o.a)({},a[0],{number:F}),v(t).then((function(e){u(n.map((function(t){return t.id===e.id?e:t}))),b(n.map((function(t){return t.id===e.id?e:t}))),q("".concat(N," was updated successfully"),!1)})).catch((function(e){q("".concat(N," was already removed from the server"),!0),W()})));O(""),A("")},newName:N,handleNewName:function(e){O(e.target.value)},newNumber:F,handleNewNumber:function(e){A(e.target.value)}}),r.a.createElement("h2",null,"Numbers"),r.a.createElement(s,{persons:h,handleClick:function(e){var t=n.filter((function(t){return t.id===e}))[0].name;window.confirm("Are you sure you want to delete ".concat(t))&&E(e).then((function(e){w().then((function(e){u(e),b(e),q("".concat(t," was deleted successfully"),!1)}))})).catch((function(e){q("Network error I guess",!0)}))}}),r.a.createElement("div",null,"debug: ",N))};c.a.render(r.a.createElement(g,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.93f82657.chunk.js.map