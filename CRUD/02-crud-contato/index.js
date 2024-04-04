// imports
const express = require('express')
const tutorial = require('./routes/tutorial')
const contatos = require('./routes/contato')

// Configuração do express
const app = express()

// Midleware
// Transforma o corpo da requisição em um JSON
app.use(express.json())
app.use(tutorial)

// Rotas

app.get("/",(req, res) => {
    res.send("ok")
})

//app.use('/teste', tutorial)

app.use(contatos)

// start da aplicaçao
app.listen(3000,() => {
    console.log("Aplicação rodando em http://localhost:3000")
})