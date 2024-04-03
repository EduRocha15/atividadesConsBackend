// imports
const express = require('express')
const turorial = require('./routes/tutorial')

// Configuração do express
const app = express()

// Midleware
// Transforma o corpo da requisição em um JSON
app.use(express.json())
app.use(turorial)

// Rotas
app.get("/",(req, res) => {
    
    res.send("ok")
})

// start da aplicaçao
app.listen(3000,() => {
    console.log("Aplicação rodando em http://localhost:3000")
})


