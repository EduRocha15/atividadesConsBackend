const mongoose = require('mongoose')

const pedidoSchema = new mongoose.Schema ({

    cliente: {
      type: mongoose.Types.ObjectId,
      ref: 'usuario',
      required: false
    },

    produtoId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'produto',
      required: false
    },

    produtoPreco: {
      type: mongoose.Types.preco,
      ref: 'produto',
      required: false
    },

    quantidade: {
      
    }
}, {timestamps: true})

const Pedido = mongoose.model ('pedido', pedidoSchema)

module.exports = Pedido