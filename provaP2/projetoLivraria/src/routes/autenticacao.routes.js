const express = require('express')
const router = express.Router()

const autenticacaoController = require('../controllers/AutenticacaoController')

const { validarLogin, validarFuncionario } = require('../validators/AutenticacaoValidator')

router.post('/cadastro', validarFuncionario, autenticacaoController.cadastrar)
router.post('/login', validarLogin, autenticacaoController.login)

module.exports = router