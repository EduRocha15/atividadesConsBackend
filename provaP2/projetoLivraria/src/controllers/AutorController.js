const Autor = require('../models/Autor')

async function criar(req, res) {
  const autor = new Autor(req.body)
  const novoAutor = await autor.save()
    res.status(201).json(
      {
        Mensagem: "Autor/a cadastrado com sucesso!",
        novoAutor
      }
    )
}

async function buscarTodos(req, res) {
  const autor = await Autor.find()

  res.status(200).json(autor)
}

async function buscarPorId(req, res) {
  const autor = await Autor.findById(req.params.id)
    if(autor) {
      res.status(200).json(autor)
    } else {
      res.status(404).json("Autor/a não encontrado!")
    }
}

async function atualizar(req, res) {
  const autorAtualizado = await Autor.findByIdAndUpdate(req.params.id, req.body, {new:true})
    if(autorAtualizado){
      res.status(200).json("Autor/a atualizado com sucesso.")
    } else {
      res.status(404).json("Autor/a não encontrado!")
    }
}

async function excluir(req, res) {
  const autorDel = await Autor.findByIdAndDelete(req.params.id)
    if(autorDel){
      res.status(200).json("Autor/a excluido.")
    } else {
      res.status(404).json("Autor/a não encotrado!")
    }
}

module.exports = {
  criar,
  buscarTodos,
  buscarPorId,
  atualizar,
  excluir
}