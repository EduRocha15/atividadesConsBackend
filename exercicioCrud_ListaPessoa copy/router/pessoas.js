const express = require('express')
const router = express.Router()

const listaPessoas = [
	{
		id: 1,
		nome: "Paulo Sergio",
		idade: 28,
		email: "sergiopaulo123@gmail.com",
		telefone: "61900010002"
	},
	{
		id: 2,
		nome: "Rosangela Maria",
		idade: 24,
		email: "rosemaria123@gmail.com",
		telefone: "61900020003"
	},
	{
		id: 3,
		nome: "Ivonete Martins",
		idade: 19,
		email: "ivonete.martins@gmail.com",
		telefone: "61900030004"
	},
	{
		id: 4,
		nome: "Caio Lopes",
		idade: 25,
		email: "cailopes123@gmail.com",
		telefone: "61900040005"
	}
]

// busca a lista com todas as pessoas cadastradas
router.get('/pessoas', (req, res)=>{
	
	res.status(200).json(listaPessoas)

})

// busca de pessoa por ID
router.get('/pessoas/:id', (req, res)=>{

	const id = req.params.id
	const cadastro = listaPessoas.find(cadastro => cadastro.id == id)

	if(cadastro){
		return res.status(200).json(cadastro)
	} return res.status(404).json({mensagem: "Cadastro não encontrado!"})
})

// cadastrando uma nova pessoa
router.post('/pessoas', (req, res)=>{

	const corpo = req.body

	if(!corpo.nome || !corpo.idade || !corpo.email || !corpo.telefone){
		return res.status(400).json({mensagem: "Todos os dados são obrigatórios!"})
	}

	const novoCadastro = {
		id: listaPessoas.length +1,
		nome: corpo.nome,
		idade: corpo.idade,
		email: corpo.email,
		telefone: corpo.telefone
	}

	listaPessoas.push(novoCadastro)
		return res.status(201).json({mensagem: "Cadastrado com sucesso!"})
})


// atualizando dados de uma pessoa
router.put('/pessoas/:id', (req, res)=>{

	const id = req.params.id
	const corpo = req.body
	
	if (!corpo.nome || !corpo.idade || !corpo.email || !corpo.telefone){
		return res.status(400).json({mensagem: "Todos os dados são obrigatórios!"})
	}

	const index = listaPessoas.findIndex(pessoa => pessoa.id == id)

	if(index == -1){
		return res.status(404).json({mensagem: "Cadastro não encontrado!"})
	}

	const novosDados = {
		id: number(id),
		nome: corpo.nome,
		idade: corpo.idade,
		email: corpo.email,
		telefone: corpo.telefone
	}

	listaPessoas(index) = novosDados

	return res.status(200).json({mensagem: "Cadastro atualizado com sucesso!"})
})


// excluindo um cadastro
router.delete('/pessoas/:id', (req, res)=>{

	const id = req.params.id
	const index = listaPessoas.findIndex(cadastro => cadastro.id == id)

	if(index == -1){
		return res.status(404).json({mensagem: "Cadastro não encontrado!"})
	}

	listaPessoas.splice(index, 1)
	 return res.status(200).json({mensagem: "Cadastro excluído com sucesso!"})
})

module.exports = router