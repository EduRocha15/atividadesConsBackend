const Departamento = require('../models/Departamento')

async function criar(req, res){
  const departamento = new Departamento(req.body)
  const novoDepartamento = await departamento.save()

  res.status(201).json({mensagem: "Dapartamento criado!"})
}

async function buscarTodos(req, res){
  res.json(await Departamento.find())
}

async function buscarPorID(req, res){
  const departamento = await Departamento.findById(req.params.id)
  if (departamento) {
    res.json(departamento)
  } else {
      res.status(404).json({ mensagem: "Departamento não encontrado!" })
  }
}

async function atualizar(req, res){
  const departamentoAtualizado = await Departamento.findByIdAndUpdate(req.params.id, req.body, {new: true})

  if(departamentoAtualizado){
    res.status(201).json(
      {mensagem: "Departamento atualizado com sucesso!"}
    )
  } else {res.status(400).json({mensagem:"Departamento não encontrado!"})}
}

async function excluir(req, res) {
  const departamentoExcluido = await Departamento.findByIdAndDelete(req.params.id)
  if (departamentoExcluido) {
      res.json(
        {mensagem: "Departamento excluido com sucesso!"}
      )
  } else {
      res.status(404).json({ mensagem: "Departamento não encontrado!" })
  }
}

module.exports = {
  criar,
  buscarTodos,
  buscarPorID,
  atualizar,
  excluir
}