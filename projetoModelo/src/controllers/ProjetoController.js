
const Projeto = require('../models/Projeto')

async function criar(req, res) {
    const projeto = new Projeto(req.body)
    const projetoCriado = await projeto.save()
    res.status(201).json(projetoCriado)
}

async function buscarTodos(req, res) {
    res.json(await Projeto.find())
}

async function buscarPorID(req, res) {
    const projeto = await Projeto.findById(req.params.id)
    if (projeto) {
        res.json(projeto)
    } else {
        res.status(404).json({ mensagem: "Projeto não encontrato!" })
    }
}

async function atualizar(req, res) {
    const projetoAtulizado = await Projeto.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (projetoAtulizado) {
        res.json(projetoAtulizado)
    } else {
        res.status(404).json({ mensagem: "Projeto não encontrato!" })
    }

}

async function excluir(req, res) {
    const projetoExcluido = await Projeto.findByIdAndDelete(req.params.id)
    if (projetoExcluido) {
        res.json({
            mensagem: "Projeto excluido com sucesso!",
            projetoExcluido
        })
    } else {
        res.status(404).json({ mensagem: "Projeto não encontrato!" })
    }
}


module.exports = {
    criar,
    buscarTodos,
    buscarPorID,
    atualizar,
    excluir
}
