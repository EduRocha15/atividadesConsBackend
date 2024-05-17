const mongoose = require('mongoose')

// Criando o schema, modelo da colection
const schema = new mongoose.Schema({
  nome: {
    type: String,
    required: true
  },
  descrição:{
    type: String,
    required: false
  },
  salario: {
    type: Number,
    required: true
  }
}, {timestamps: true})

const Cargo = mongoose.model('cargo', schema)

module.exports = Cargo