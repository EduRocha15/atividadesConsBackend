const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

/*
Construa uma api que calcule o peso ideal de uma pessoa. Dados de entrada: altura e sexo. Fórmulas para cálculo
do peso:
    • peso ideal de homem = (72,7 x altura) – 58
    • peso ideal da mulher = (62,1 x altura) – 44,7
*/

app.post('/exercicio6', (req, res) => {
    
    const corpo = req.body
    console.log(corpo)

    if(corpo.sexo === "m" || corpo.sexo === "M" ||  corpo.sexo === "masculino" || corpo.sexo === "Masculino"){
        pesoIdealh = parseFloat(72.7 * corpo.altura) - 58
        res.json(`Seu peso ideal é: ${pesoIdealh.toFixed(2)}`)
    }

    else if(corpo.sexo === "f" || corpo.sexo === "F" || corpo.sexo === "feminino" || corpo.sexo === "Feminino"){
        pesoIdealf = parseFloat(62.1 * corpo.altura) - 44.7
        res.json(`Seu peso ideal é: ${pesoIdealf.toFixed(2)}`)
    }

    else{
        res.json("Insira um sexo válido: Masculino ou Feminino")
    }
    
})


app.listen(port, () => {
    console.log("Teste iniciado, API rodando em HTTP://localhost:3000")
})