const express = require('express')
const mongoose = require('mongoose')

const app = express()
const port = 3000

// Midlewares
app.use(express.json())

// Conexão com o MongoDB
mongoose.connect(`mongodb+srv://ceduardo486:senha@construbackend.chbdbp7.mongodb.net/?retryWrites=true&w=majority&appName=construbackend`)
  .then(()=>console.log("Conectado ao MongoDB"))
  .catch(err => console.log("Erro ao conectar no MongoDB: ", err))

// Schemas
const Tarefa = mongoose.model('tarefa', {
  nome: String
})

// Rotas
app.post('/tarefas', async (req, res)=>{
  const tarefa = new Tarefa({nome: req.body.nome})
  const tarefaCriada = await tarefa.save()

  res.json(tarefaCriada)
})

// Listen da aplicação
app.listen(port, ()=>{
  console.log(`Aplicação rodando em http://localhost${port}!`)
})