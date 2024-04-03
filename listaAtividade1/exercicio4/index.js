/*
O custo de um carro novo ao consumidor é a soma do custo de fábrica com a porcentagem do distribuidor e dos
impostos (aplicados ao custo de fábrica). Supondo que o percentual do distribuidor seja de 28% e os impostos de
45%, escrever um script para ler o custo de fábrica de um carro, calcular e escrever o custo final ao consumidor
*/

// valorFinal = custo de fabrica + 28% + 45%

const prompt = require('prompt-sync')();

let precoVeiculo = Number (prompt('Qual o preço do veículo na fábrica? ').replace(',','.'))

let precocomimp = Number (precoVeiculo*0.45)
let precocomreajuste = Number ((precocomimp+precoVeiculo)*0.28)

let valorFinal = Number (precoVeiculo+precocomimp+precocomreajuste)

console.log(`O preço do veículo para o consumidor é de $${valorFinal}.`)
