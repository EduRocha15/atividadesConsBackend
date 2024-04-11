// configurando
const express = require('express')
const app = express()
const port = 3000

// midlewares
app.use(express.json())

//rotas
const produtosRouter = require('./routes/produtos')
app.use(produtosRouter)

// start da aplicação
app.listen(port, ()=>{
    console.log(`API rodando na porta ${port}`)
})