const express = require('express')
const router = express.Router()

// banco de dados interno
const listaContatos = ["Carlos", "Maria", "Pedro", "Carla"]

// READ -> Buscar todos os contatos
router.get('/contatos', (req, res) => {

    res.json(listaContatos)
})
    
// READ -> Busca de contatos por id

router.get('/contatos/:id', (req, res) => {

    const id = req.params.id
    res.json(listaContatos[id])

})

router.post('/contatos', (req, res) => {

    const contato = req.body
    listaContatos.push(contato.nome)
    
    res.json({mensagem: "Contato criado com sucesso!"})

})

router.post('/contatos', (req, res) => {
    
})

module.exports = router