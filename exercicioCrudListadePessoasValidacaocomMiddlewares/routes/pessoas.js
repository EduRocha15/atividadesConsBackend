// configurando ambiente
const express = require('express')
const router = express.Router()

// Banco interno
const listaPessoas = [
  {
      id: 1,
      nome: "João",
      idade: 25,
      email: "joao@example.com",
      telefone: "(00) 1234-5678"
  },
  {
      id: 2,
      nome: "Maria",
      idade: 30,
      email: "maria@example.com",
      telefone: "(00) 9876-5432"
  },
  {
      id: 3,
      nome: "Pedro",
      idade: 22,
      email: "pedro@example.com",
      telefone: "(00) 5555-5555"
  }
]

// Criando Funções/Intermediários/Middlewares
// logica para ver se pessoa esta cadastrada no banco de dados
function pessoaExiste(req, res, next){

  console.log("A requisição validou se cadastro existe!")

  const id = req.params.id
  const pessoa = listaPessoas.find(pessoa => pessoa.id == id)
  const index = listaPessoas.findIndex(pessoa => pessoa.id == id)

  if(pessoa){
    res.pessoa = pessoa
    res.index = index
    return next()
  } return res.status(404).json({mensagem:"Pessoa não encontrada!"})

  
}

// logica para validar se todos os dados foram preenchidos
function validarAtributos(req, res, next){
  
  console.log("A requisição validou os atributos!")

  const dados = req.body

  if(!dados.nome || !dados.idade || !dados.email || !dados.telefone){
    return res.status(400).json("Todos os dados devem ser preenchidos!")
  }

  return next()
}

// Criando rotas
// rota para buscar todas as pessoas
router.get('/pessoas', (req, res)=>{
  res.json(listaPessoas)
})

// rota para buscar pessoa por id
router.get('/pessoas/:id', pessoaExiste, (req, res)=>{
  res.json(res.pessoa)
})

// Cadastrando nova pessoa
router.post('/pessoas', validarAtributos, (req, res, next)=>{

  const dados = req.body
  console.log(dados)

  const novaPessoa = {
    id: listaPessoas.length+1,
    nome: dados.nome,
    idade: dados.idade,
    email: dados.email,
    telefone: dados.telefone
  }

  listaPessoas.push(novaPessoa)

  res.status(201).json("Pessoa cadastrada com sucesso!")
})

// Atualizando cadastro
router.put('/pessoas/:id', pessoaExiste, validarAtributos, (req, res, next)=>{

  const dados = req.body

  const pessoaAtualizada = {
    id: req.params.id,
    nome: req.body.nome,
    idade: req.body.idade,
    email: req.body.email,
    telefone: req.body.telefone
  }

  listaPessoas[res.index]=pessoaAtualizada

  res.status(200).json("Cadastro atualizado!")
})

// Deletando um cadastro
router.delete('/pessoas/:id', pessoaExiste, (req, res, next)=>{
  listaPessoas.splice(res.index, 1)
  res.json({ mensagem: "Cadastro excluído com sucesso!" })
})

// exportando modulo para ser usado no index.js
module.exports = router