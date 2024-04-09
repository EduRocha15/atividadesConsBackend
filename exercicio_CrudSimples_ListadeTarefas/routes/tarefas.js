// configurando
const express = require('express')
const router = express.Router()

// You can use both options
// arrey vazia ou a lista local

// const listaTarefas = []
const listaTarefas = ['Lavar a louça', 'Pintar a casa', 'Lavar o chão']

// READ -> busca todas as tarefas
router.get('/tarefas', (req, res)=>{

    res.json(listaTarefas)
})

// READ -> busca tarefa pelo ID
router.get('/tarefas/:id', (req, res)=>{

    const id = req.params.id
    res.json(listaTarefas[id])
})

// READ -> insere uma nova terefa
router.post('/tarefas', (req, res)=>{
    
    const tarefa = req.body
    listaTarefas.push(tarefa.tarefa)

    res.json({mensagem: "Tarefa criada com sucesso!"})
})

// READ -> excluir uma tarefa
router.delete('/tarefas/:id', (req, res)=>{

    const id = req.params.id
    listaTarefas.splice(id, 1)
    res.json({mensagem: "Tarefa excluída com sucesso!"})
})

// READ -> atualiza uma tarefa
router.put('/tarefas/:id', (req, res)=>{

    const id = req.params.id
    const novaTarefa = req.body
    listaTarefas[id] = novaTarefa.tarefa

    res.json({mensagem: "Tarefa atualiza com sucesso!"})
})

module.exports = router