/* API utilizando o framework Express do Node.js para criar operações CRUD básicas destinadas ao gerenciamento
 de uma lista de tarefas.
*/

const express = require('express')
const app = express()
const port = 3000

tarefaRouter = require('./routes/tarefas')

app.use(express.json())

app.use(tarefaRouter)

app.listen(port, ()=>{
    console.log("API iniciada, rodando em http://localhost:3000")
})