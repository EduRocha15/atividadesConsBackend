// Neste exercício, sua tarefa é desenvolver uma API utilizando Express e Mongoose para criar um CRUD de pessoas por nome e registrar no banco de dados MongoDB.

//  Imports
const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

const app = express()
const PORT = 3000

// Conexão com server
const DB_USER = process.env.DB_USER
const DB_PASS = process.env.DB_PASS
const DB_HOST = process.env.DB_HOST
const DB_NAME = process.env.DB_NAME

mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`)
  .then(() => console.log("Conectado ao banco Mongo!"))
  .catch(err => console.log("Erro ao conectar ao banco Mongo: ", err))

// Middlewares
app.use(express.json())

// Models
const Pessoas = mongoose.model('pessoa', {nome: String})

// Rotas
app.post('/pessoas', async (req, res)=>{
  const pessoa = new Pessoas(req.body)
  const pessoaCadastrada = await pessoa.save()

  res.status(201).json({mensagem: "Pessoa cadastrada com sucesso!"})
})

app.get('/pessoas', async (req, res)=>{
  const pessoa = await Pessoas.find()
  res.json(pessoa)
})

app.get('/pessoas/:id', async (req, res)=>{
  const pessoa = await Pessoas.findById(req.params.id)
  res.json(pessoa)
})

app.put('/pessoas/:id', async (req, res)=>{
  const pessoaAtualizada = await Pessoas.findByIdAndUpdate(req.params.id, req.body, {new: true})
  res.status(201).json({mensagem:"Pessoa atualizada com sucesso!"})
})

app.delete('/pessoas/:id', async (req, res)=>{
  const pessoaDeletada = await Pessoas.findByIdAndDelete(req.params.id)
  res.status(200).json({mensagem: "Pessoa deletada com sucesso!"})
})

// Start
app.listen(PORT, ()=>{
  console.log(`API iniciada em http://localhost:${PORT}!`)
})