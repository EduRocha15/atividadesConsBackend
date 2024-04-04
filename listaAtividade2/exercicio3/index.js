const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

/*Escrever uma api que lê o nome de um vendedor, o seu salário fixo, o total de vendas por ele efetuadas e o
percentual que ganha sobre o total de vendas. Calcular o salário total do vendedor. Escrever o nome do vendedor
e seu salário total. */

//nomeVendedor
//salarioFixo
//totalVendasEfetuada
//percentual

app.post("/exercicio3", (req, res) => {
    
    const corpo = req.body
    console.log(corpo)

    const salarioComPercent = corpo.Vendas*corpo.Percentual
    novoSalario = corpo.Salario+salarioComPercent

    res.json(`${corpo.Nome}, você receberá esse mês: $${novoSalario}`)
    
})


app.listen(port,() => {
    console.log("Teste iniciado, API rodando HTTP://localhost:3000")
})