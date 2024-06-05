const express = require('express')
const router = express.Router()

// Controllers
const autorController = require('../controllers/AutorController')
const editoraController = require('../controllers/EditoraController')

// Validators
const { idValidator } = require('../validators/IdValidator')
const { autorValidator } = require('../validators/AutorValidator')
const { editoraValidator } = require('../validators/EditoraValidator')

// Rotas para Autores
router.post('/autores', autorValidator, autorController.criar)
router.get('/autores', autorController.buscarTodos)
router.get('/autores/:id', idValidator, autorController.buscarPorId)
router.put('/autores/:id', idValidator, autorValidator, autorController.atualizar)
router.delete('/autores/:id', idValidator, autorController.excluir)

// Rotas para Editoras
router.post('/editora', editoraValidator, editoraController.criar)
router.get('/editora', editoraController.buscarTodos)
router.get('/editora/:id', idValidator, editoraController.buscarPorId)

module.exports = router