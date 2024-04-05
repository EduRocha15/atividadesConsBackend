const express = require('express')
const app = express()
const port = 3000

app.use(express.json())


/*Faça uma api que leia o nome de um piloto, uma distância percorrida em km e o tempo que o piloto levou para
percorrê-la (em horas). O programa deve calcular a velocidade média - Velocidade = Distância / Tempo - em km/h,
e exibir a seguinte frase: A velocidade média do <nome do piloto> foi <velocidade media calculada> km/h.
*/


app.post("/exercicio4", (req, res) => {

    const corpo = req.body
    console.log(corpo)
    
    let piloto = corpo.piloto
    let velocidadeMedia = corpo.distancia/corpo.tempo
  
    res.json(`A velocidade média do poloto ${piloto} foi ${velocidadeMedia} km/h` )
})

app.listen(port, () => {
    console.log("Teste iniciado, API rodando em HTTP://localhost:3000")
})