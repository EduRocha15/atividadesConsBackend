// Configurando imports
const express = require('express')
require('dotenv').config()
const mongoose = require('mongoose')
const port = 3000

//Configurações
const app = express()

// Conexão com server
const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASS
const DB_HOST = process.env.DB_HOST
const DB_NAME = process.env.DB_NAME

mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`)
  .then(() => console.log("Conectado ao banco Mongo!"))
  .catch(err => console.log("Erro ao conectar ao banco Mongo: ", err))

// Middlewares
app.use(express.json())

// Models
const Tarefa = mongoose.model('tarefa', {nome: String})

// Rotas
app.post('/tarefas', async (req, res)=>{
  const tarefa = new Tarefa(req.body)
  const tarefaCriada = await tarefa.save()

  res.status(201).json(tarefaCriada)
})

app.get('/tarefas', async (req, res)=>{
  const tarefas = await Tarefa.find()

  res.status(200).json(tarefas)
})

app.get('/tarefas/:id', async (req, res)=>{
  const tarefa = await Tarefa.findById(req.params.id)
  res.json(tarefa)
})

// Start
app.listen(port, ()=>{
  console.log({mensagem:`API rodando em http://localhost:${port}`})
})