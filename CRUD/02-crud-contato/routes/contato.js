const express = require('express')
const router = express.Router()

let listaContatos = ["Maria", "Joao", "Carlos"]
//Rotas
router.get('/contatos', (req, res)=>{

    res.json(listaContatos)
})

module.exports = router