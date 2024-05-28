const express = require('express')
const router = express.Router()

// controllers
const CargoController = require('../controllers/CargoController')
const DepartamentoController = require('../controllers/DepartamentoController')
const FuncionarioController = require('../controllers/FuncionarioController')
const ProjetoController = require('../controllers/ProjetoController')
const TarefaController = require('../controllers/TarefaController')

// validators
const { validarId } = require('../validators/idValidador')
const { cargoValidador } = require('../validators/CargoValidador')
const { departamentoValidador } = require('../validators/DepartamentoValidador')
const { funcionarioValidador } = require('../validators/FuncionarioValidador')
const { projetoValidador } = require('../validators/ProjetoValidador')
const { tarefaValidador } = require('../validators/TarefaValidador')

// Cargos
router.post('/cargos', cargoValidador, CargoController.criar)
router.get('/cargos', CargoController.buscarTodos)
router.get('/cargos/:id', validarId, CargoController.buscarPorID)
router.put('/cargos/:id', validarId, cargoValidador, CargoController.atualizar)
router.delete('/cargos/:id', validarId, CargoController.excluir)

// Departamentos
router.post('/departamentos', departamentoValidador, DepartamentoController.criar)
router.get('/departamentos', DepartamentoController.buscarTodos)
router.get('/departamentos/:id', validarId, DepartamentoController.buscarPorID)
router.put('/departamentos/:id', validarId, departamentoValidador, DepartamentoController.atualizar)
router.delete('/departamentos/:id', validarId, DepartamentoController.excluir)

// Funcionarios
router.post('/funcionarios', funcionarioValidador, FuncionarioController.criar)
router.get('/funcionarios', FuncionarioController.buscarTodos)
router.get('/funcionarios/:id', validarId, FuncionarioController.buscarPorID)
router.put('/funcionarios/:id', validarId, funcionarioValidador, FuncionarioController.atualizar)
router.delete('/funcionarios/:id', validarId, FuncionarioController.excluir)

// Projetos
router.post('/projetos', projetoValidador, ProjetoController.criar)
router.get('/projetos', ProjetoController.buscarTodos)
router.get('/projetos/:id', validarId, ProjetoController.buscarPorID)
router.put('/projetos/:id', validarId, projetoValidador, ProjetoController.atualizar)
router.delete('/projetos/:id', validarId, ProjetoController.excluir)

// Tarefas
router.post('/tarefas', tarefaValidador, TarefaController.criar)
router.get('/tarefas', TarefaController.buscarTodos)
router.get('/tarefas/:id', validarId, TarefaController.buscarPorID)
router.put('/tarefas/:id', validarId, tarefaValidador, TarefaController.atualizar)
router.delete('/tarefas/:id', validarId, TarefaController.excluir)


module.exports = router