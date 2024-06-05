// Import mongoose
const mongoose = require('mongoose')

// Criando schema
const schema = new mongoose.Schema ({

  titulo:{
    type: String,
    required: true
  },

  descricao:{
    type: String,
    required: true
  },

  data_inicio:{
    type: Date,
    required: true
  },

  data_fim:{
    type: Date,
    required: true
  },

  funcionario:{
    type: mongoose.Types.ObjectId,
    ref:'funcionario',
    required: false
  },

  projeto:{
    type: mongoose.Types.ObjectId,
    ref: 'projeto',
    required: false
  },
}, {timestamps: true})

const Tarefa = mongoose.model('tarefa', schema)

module.exports = Tarefa