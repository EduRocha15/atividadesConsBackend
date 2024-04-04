const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

/* 
Uma empresa decide dar um aumento de 30% aos funcionários cujo salário é inferior a 1.000 reais. Escreva uma api que
receba o salário de um funcionário e imprima o valor do salário reajustado ou uma mensagem caso o funcionário não
tenha direito ao aumento.
*/

// aumento de 30%
// salario<1000

app.post('/exercicio2', (req,res) => {

    const corpo = req.body
    console.log(corpo)

    const salario = parseFloat(corpo.salario)
    if(salario<1000){
        let novoSalario = (salario*0.3)+salario

        res.json(`Você receberá um novo salario de $${novoSalario.toFixed(2)}.`)
    }
    res.json("Voce já recebe bem!")

})


app.listen(port,() => {
    console.log("Teste iniciado, API rodando HTTP://localhost:3000")
})

