const mongoose = require('mongoose')

const autorSchema = new mongoose.Schema ({
  nome:{
    type: String,
    required: true
  },

  nacionalidade:{
    type: String,
    required: true
  },

  nascimento:{
    type: Date,
    required: true
  },

  biografia:{
    type: String,
    required: true
  },
  
  obras:{
    type: mongoose.Types.ObjectId,
    ref: 'livro'
  }
}, {timestamps: true})

const Autor = mongoose.model ('Autore', autorSchema)

module.exports = Autor