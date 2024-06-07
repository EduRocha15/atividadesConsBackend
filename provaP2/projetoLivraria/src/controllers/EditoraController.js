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
  .populate('livros', 'titulo')
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

async function atualizar (req, res) {
  const edAtualizada = await Editora.findByIdAndUpdate(req.params.id, req.body, {new: true})
  if(edAtualizada){
    res.satus(200).json(
      {
        mensagem: "Editora atualizada.",
        edAtualizada
        }
    )
  } else {
    res.status(404).json({mensagem: "Editora não encontrada!"})
  }
}

async function excluir (req, res) {
  const edDeletada = await Editora.findByIdAndDelete (req.params.id)
  if (edDeletada) {
    res.status(200).json({
        mensagem: "Editora excluída com sucesso."
      })
  } else {
    res.status(404).json({
      mensagem: "Editora não encontrada."
    })
  }
}

module.exports = {
  criar,
  buscarTodos,
  buscarPorId,
  atualizar,
  excluir
}