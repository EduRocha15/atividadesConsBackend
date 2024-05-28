const express = require('express')
const app = express()

const PORT = process.env.PORT

const DBconnection = require('./database/connection')
DBconnection()

app.use(express.json())

const autenticacaoRoutes = require('./routes/autenticacao.routes')
app.use(autenticacaoRoutes)

const { checarToken } = require('./validators/AutenticacaoValidador')

const routes = require('./routes/routes')
app.use("/", checarToken, routes)

app.listen(PORT, () => {
    console.log(`Aplicação rodando na porta ${PORT}`)
})