// Importa o modulo express
const express = require('express')

// Cria um router
const router = express.Router()

// Get tutorial
router.get('/tutorial', (req, res) => {

    res.json("Bateu no /tutorial GET")
})

router.post('/tutorial', (req, res) => {
    res.json('Bateu no /teste/tutorial')
})

// Exportar modulo
module.exports = router

