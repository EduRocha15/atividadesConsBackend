const mongoose = require('mongoose')
const { boolean } = require('yup')

const categoriaSchema = new mongoose.Schema ({

  nome: {
    type: String,
    required: true
  },

  descricao: {
    type: String,
    required: true
  },

  visivel: {
    type: Boolean,
    required: false
  },

  livros: {
    type: mongoose.Types.ObjectId,
    ref: 'livro',
    requuired: false
  }
})

const Categoria = mongoose.model ('categoria', categoriaSchema)

module.exports = Categoria