const express = require('express')
const app = express()

const port = 3000

const DBconnection = require('./database/connection')
DBconnection()

app.use(express.json())

const autenticacaoRoutes = require('./routes/autenticacao.routes')
app.use(autenticacaoRoutes)

const { checarToken } = require('./validators/AutenticacaoValidador')

const routes = require('./routes/routes')
app.use("/", checarToken, routes)

app.listen(port, () => {
    console.log(`Aplicação rodando na porta ${port}`)
})