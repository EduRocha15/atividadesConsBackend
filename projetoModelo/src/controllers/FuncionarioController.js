// Import do modulo model/schema de Project
const Funcionario = require('../models/Funcionario')

// Creating controllers
async function criar (req, res) {
  const funcionario = new Funcionario (req.body)
  const funcionarioNew = await funcionario.save()

  res.status(201).json({mensage:"Funcinario cadastrado com sucesso!"})
}

async function buscarTodos (req, res) {
  res.status(200).json(await Funcionario.find().populate(['cargo', 'departamento']))
}

async function buscarPorID (req, res) {
  const funcionarioByID = await Funcionario.findById(req.params.id)

  if (funcionarioByID) {
    res.status(200).json(funcionarioByID)
  } else { 
      res.status(404).json({mensage:"Funcionario não encontrado!"})
    }
}

async function atualizar (req, res) {
  const funcionarioActualized = await Funcionario.findByIdAndUpdate(req.params. id, req.body, {new: true})

  if(funcionarioActualized){
    res.status(200).json({mensage: "Funcionario atualizado!"})
  } else {
    res.status(404).json({mensage: "Funcionario não encontrado!"})
  }
}

async function excluir (req, res) {
  const funcionario = await Funcionario.findByIdAndDelete(req.params.id)

  if (funcionario) {
    res.status(200).json({mensage: "Funcionario exclído com sucesso!"})
  } else {
    res.status(404).json({mensage: "Funcionario não encontrado!"})
  }
}

module.exports = {
  criar,
  buscarTodos,
  buscarPorID,
  atualizar,
  excluir
}