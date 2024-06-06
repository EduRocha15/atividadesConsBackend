const express = require('express')
const router = express.Router()

// Controllers
const autorController = require('../controllers/AutorController')
const editoraController = require('../controllers/EditoraController')
const livroController = require('../controllers/LivroController')

// Validators
const { idValidator } = require('../validators/IdValidator')
const { autorValidator } = require('../validators/AutorValidator')
const { editoraValidator } = require('../validators/EditoraValidator')
const { livroValidator } = require('../validators/LivroValidator')

// Rotas para Autores
router.post('/autor', autorValidator, autorController.criar)
router.get('/autor', autorController.buscarTodos)
router.get('/autor/:id', idValidator, autorController.buscarPorId)
router.put('/autor/:id', idValidator, autorValidator, autorController.atualizar)
router.delete('/autor/:id', idValidator, autorController.excluir)

// Rotas para Editoras
router.post('/editora', editoraValidator, editoraController.criar)
router.get('/editora', editoraController.buscarTodos)
router.get('/editora/:id', idValidator, editoraController.buscarPorId)
router.put('/editora/:id', idValidator, editoraValidator, editoraController.atualizar)
router.delete('/editora/:id', idValidator, editoraController.excluir)

// Rotas para Livro
router.post('/livro', livroValidator, livroController.criar)
router.get('/livro', livroController.buscarTodos)

module.exports = router