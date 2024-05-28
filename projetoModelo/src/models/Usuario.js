const mongoose = require('mongoose')

// Criando o schema, modelo da colection
const schema = new mongoose.Schema({
  nome: {
    type: String,
    required: true
  },
  email:{
    type: String,
    required: true
  },
  senha: {
    type: String,
    required: true
  }
}, {timestamps: true})

const Usuario = mongoose.model('usuario', schema)

module.exports = Usuario