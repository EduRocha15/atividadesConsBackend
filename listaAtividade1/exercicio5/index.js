/* 
O custo de um carro novo ao consumidor é a soma do custo de fábrica com a porcentagem do distribuidor e dos
impostos (aplicados ao custo de fábrica). Escreva um script para ler o custo de fábrica de um carro, a
porcentagem do distribuidor e o imposto, e calcular e escrever o custo final ao consumidor8
*/

const prompt = require('prompt-sync')();

let precoVeiculo = Number (prompt('Qual o preço do veículo na fábrica? ').replace(',','.'))

let precocomimp = Number (precoVeiculo*0.38)
let precocomreajuste = Number ((precocomimp+precoVeiculo)*0.19)

let valorFinal = Number (precoVeiculo+precocomimp+precocomreajuste)

console.log(`O preço do veículo para o consumidor é de $${valorFinal}`)