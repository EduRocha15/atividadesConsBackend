// import do model
const Tarefa = require('../models/Tarefa')

async function criar (req, res) {
  const tarefa = new Tarefa (req.body)
  const novaTarefa = await tarefa.save()
    res.status(201).json({mensagem: "Nova tarefa criada com sucesso!"})
}

async function buscarTodos (req, res) {
  const tarefas = await Tarefa.find()
    res.json(tarefas)
}

async function buscarPorID (req, res) {
  const tarefaId = await Tarefa.findById(req.params.id)
    if (tarefaId) {
      res.json(tarefaId)
    } 
    else {
      res.status(404).json({mensagem: "Tarefa não encontrada!"})
    }
}

async function atualizar (req, res) {
  const tarefaAtualizada = await Tarefa.findByIdAndUpdate(req.params.id, req.body, {new: true})
    if (tarefaAtualizada) {
      res.json(tarefaAtualizada)
    } else {
      res.status(404).json({mensagem: "Tarefa não encontrada!"})
    }
}

async function excluir (req, res) {
  const tarefaExcluida = await Tarefa.findByIdAndDelete(req.params.id)
    if (tarefaExcluida) {
      res.json({mensagem: "Tarefa excluída com sucesso!"})
    } else {
      res.json({mensagem: "Tarefa não encontrada!"})
    }
}

module.exports = {
  criar,
  buscarTodos,
  buscarPorID,
  atualizar,
  excluir
}