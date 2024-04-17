const express = require('express')
const router = express.Router()

module.exports = router

const listaPessoas = [
	{
		"nome": "Carlos Eduardo",
		"idade": 28,
		"email": "carlosedu123@gmail.com",
		"telefone": "61900010002"
	},
	{
		"nome": "Maria Ester",
		"idade": 24,
		"email": "mariaester123@gmail.com",
		"telefone": "61900020003"
	},
	{
		"nome": "João Pedro",
		"idade": 19,
		"email": "joaoped123@gmail.com",
		"telefone": "61900030004"
	},
	{
		"nome": "Ana Beatriz",
		"idade": 25,
		"email": "biaana123@gmail.com",
		"telefone": "61900040005"
	}
]

// busca a lista com todas as pessoas cadastradas
router.get('/pessoas', (req, res)=>{
	res.json(listaPessoas)
})

// busca de pessoa por ID
router.get("/pessoas/:id", (req, res)=>{

	const id = req.params.id

	res.json(listaPessoas[id])
})

// cadastrando uma nova pessoa
router.post("/pessoas", (req, res)=>{

	const novaPessoa = req.body

	listaPessoas.push(novaPessoa)

	res.json("Pessoa cadastrada com sucesso!")
})

// atualizando dados de uma pessoa
router.put("/pessoas/:id", (req, res)=>{

	const id = req.params.id

	const novosDados = req.body

	listaPessoas[id] = novosDados

	res.json("Cadastro atualizado com sucesso!")
})


// excluindo um cadastro
router.delete("/pessoas/:id", (req, res)=>{

	const id = req.params.id

	listaPessoas.splice(id, 1)

	res.json("Cadastro excluído com sucesso!")
})