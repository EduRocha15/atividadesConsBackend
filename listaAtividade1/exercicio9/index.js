/*
Faça um script para somar dois números e multiplicar o resultado pelo primeiro número.
*/

const prompt = require('prompt-sync')();

var primeiroNumero = parseFloat(prompt("Digite um numero: "))
var segundoNumero = parseFloat(prompt("Digite outro numero: "))

valorNovo = (primeiroNumero+segundoNumero)*primeiroNumero

console.log(valorNovo)