const express = require('express')
const router = express.Router()

module.exports = router

const listaProdutos = [
   {
      id: 1,
      nome: "Arroz",
      preco: 27.99
   },
   {
      id: 2,
      nome: "Feijao",
      preco: 7.99
   },
   {
      id: 3,
      nome: "Cadira Gamer",
      preco: 1999.99
   }
 ]

// Buscar todos os produtos
router.get('/produtos', (req, res)=>{

   res.json(listaProdutos)
 })

// Buscar produto por ID
router.use('/produtos/:id', (req, res)=>{

   const id = req.params.id
   const produto = listaProdutos.find(produto => produto.id == id)

   res.json(produto)
})

// Adicionando novo produto
router.post('/produtos', (req, res)=>{

   const dadosProdutos = req.body
   const novoProduto = {

      id: listaProdutos.length + 1,
      nome: dadosProdutos.nome,
      preco: dadosProdutos.preco
   }
   listaProdutos.push(novoProduto)

   res.json({mensagem: 'Produto cadastrado com sucesso!'})
})

// Atualizando produto
router.put('/produtos/:id', (req, res)=>{

   // puxa o id(na url)
   const id = req.params.id

   // puxa o novo produto(os dados)
   const novosDados = req.body

   // puxa o produto pelo id e atualiza
   const index = listaProdutos.findIndex(produto => produto.id == id)
   const produtoAtualizado = {
      id: Number(id),
      nome: novosDados.nome,
      preco: novosDados.preco
   }

   listaProdutos[index] = produtoAtualizado

   res.json({mensagem: 'Produto atualizado com sucesso!'})

   // deleta um produto pelo id
   router.delete('/produtos', (req, res)=>{
      const id = req.params.id
      const index = listaProdutos.findIndex(listaProdutos.id == id)

      listaProdutos.splice(index, 1)

      res.json({mensagem: "Produto excluido com sucesso!"})
   })

})