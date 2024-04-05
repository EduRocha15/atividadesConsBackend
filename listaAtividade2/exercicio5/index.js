const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

/*
Faça uma api que calcule e imprima o salário reajustado de um funcionário de acordo com a seguinte regra:

    • Salários até 2.000, reajuste de 50%
    • Salários maiores que 2.000, reajuste de 30%
*/

app.post("/exercicio5", (req, res) => {

    const corpo = req.body
    console.log(corpo)

    if(corpo.salario <= 2000){
        salarioNovo = (reajuste = corpo.salario*0.5)+corpo.salario
        res.json(`Seu salario teve reajuste de 50%, e agora é de: $${salarioNovo}`)
    }

    salarioNovo = parseFloat (reajuste = corpo.salario*0.3)+corpo.salario
    res.json(`Seu salario é superior a $2000 e teve um reajuste de 30%, e agora é de $${salarioNovo.toFixed(2)}`)

    console.log(`Novo salário: $${salarioNovo.toFixed(2)}`)
})

app.listen(port, () => {
    console.log("Teste iniciado, API rodando em HTTP://localhost:3000")
})