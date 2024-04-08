const express = require('express')
const app = express()
const port = 3000

const contatoRouter = require('./routes/contatos')

app.use(express.json())

app.get('/', (req, res) => {

    res.json('OK')
})

app.use(contatoRouter)

app.listen(port, () => {
    console.log("API iniciada. Rodando em hhht://localhost:3000")
})