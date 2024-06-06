const express = require('express')

const app = express()
const PORT = 3000

// Middleware
app.use(express.json())

// Conexão com DB
const DBconnection = require('./database/connection')
DBconnection()

const router = require('./routes/routes')
app.use(router)

app.listen(PORT, () => {
  console.log ({mensagem: `API iniciada em http://localhost:${PORT}`})
})