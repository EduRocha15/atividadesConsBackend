// Configurando
const express = require('express')
const app = express()
const PORT = 3000

//Connections
// Require do modulo de conexão do DB
const DBConnect = require('./database/connections')
DBConnect()

// Midllewares
app.use(express.json())

// Import rotas
const routes = require('./routes/routes')
app.use(routes)

// Configurando a api para ouvir na porta correta
app.listen(PORT, ()=>{
  console.log(`API rodando em HTTP://localhost:${PORT}`)
})