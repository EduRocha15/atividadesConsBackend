const Categoria = require('../models/Categoria')

async function criar (req, res) {
  const categoria = new Categoria(req.body)
  const novaCategoria = await categoria.save()

  res.status(201).json({mensagem: "Nova categoria criada!"}, novaCategoria)
}

module.exports = {
  criar,
//  buscarTodos,
//  buscarPorId,
//  atualizar,
//  excluir
}