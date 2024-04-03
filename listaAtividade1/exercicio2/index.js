/*
Escreva um script para ler o número total de eleitores de um município, o número de votos brancos,
nulos e válidos. Calcular e escrever o percentual que cada um representa em relação ao total de eleitores.
*/
const prompt = require('prompt-sync')();

let votosValidos = Number(prompt("Qual foi a quantidade de votos válidos? "))
let votosBrancos = Number(prompt("Qual foi a quantidade de votos em brancos? "))
let votosNulos = Number(prompt("Qual foi a quantidade de votos nulos? "))

let totalEleitores = Number (votosBrancos+votosNulos+votosValidos)

let percentualBranco = (votosBrancos/totalEleitores)*100
let percentualNulo = (votosNulos/totalEleitores)*100
let percentualValido = (votosValidos/totalEleitores)*100

console.log(`Votos em válidos é: ${percentualValido.toFixed(2)}%`)
console.log(`Votos em branco é: ${percentualBranco.toFixed(2)}%`)
console.log(`Votos em nulos  é: ${percentualNulo.toFixed(2)}%`)