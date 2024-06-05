const Editora = require('../models/Editora')

async function criar (req, res) {
  const editora = new Editora(req.body)
  const novaEditora = await editora.save()
  res.status(201).json(
    {
      mensagem: "Nova editora cadastrada.",
      novaEditora
    }
  )
}

async function buscarTodos (req, res) {
  const editoras = await Editora.find()
  res.status(200).json(editoras)
}

async function buscarPorId (req, res) {
  const editora = await Editora.findById(req.params.id)
  if(editora){
    res.status(200).json(editora)
  } else {
    res.status(404).json(
      {mensagem: "Editora não encontrada!"}
    )
  }
}

module.exports = {
  criar,
  buscarTodos,
  buscarPorId,
//  atualizar,
//  excluir
}