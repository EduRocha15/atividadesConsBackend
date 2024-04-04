/*
Faça um script que determine o volume de uma caixa d’água cilíndrica, sendo que o raio e a altura devem ser
fornecidos. OBS: V = PI * Raio^2 * Altura
*/

const prompt = require('prompt-sync')();

const PI = (3,14)

var raio = parseFloat(prompt("Qual o raio? "))
var altura = parseFloat(prompt("Qual a altura? "))

var v = PI*(raio*raio)*altura

console.log(`O volume é de ${v.toFixed(2)}`)
