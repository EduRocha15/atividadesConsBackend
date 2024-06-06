const Livro = require('../models/Livro')

async function criar (req, res) {
  const livro = new Livro (req.body)
  const novoLivro = await livro.save()

  res.status(201).json({
    mensagem: "Novo livro cadastrado!",
    novoLivro
  })
}

async function buscarTodos (req, res) {
  const livros = await Livro.find()
    .populate('autor', 'nome -_id')
    .populate('editora', 'nome -_id')
    res.status(200).json(livros)
}

module.exports = {
  criar,
  buscarTodos
}