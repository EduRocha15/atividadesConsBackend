const mongoose = require('mongoose')

const livroSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true
  },

  autor: {
    type: mongoose.Types.ObjectId,
    ref: 'autor',
    required: true
  },

  categoria: {
    type: mongoose.Types.ObjectId,
    ref: 'categoria'
  },

  preco: {
    type: Number,
    required: true
  },

  editora: {
    type: mongoose.Types.ObjectId,
    ref: 'editora',
    required: true
  }
})

const Livro = mongoose.model('livro', livroSchema)

module.exports = Livro