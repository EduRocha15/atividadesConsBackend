/*
Escreva um script para ler o salário mensal atual de um funcionário e o percentual de reajuste.
Calcular e escrever o valor do novo salário.
*/

const prompt = require("prompt-sync")();

// salarioAtual, percentualReajuste e novoSalario

let salarioAtual = Number (prompt("Qual o seu salarlio atual? ").replace((",",".")))
let percentualReajuste = Number (0.05)*salarioAtual
let novoSalario = Number(salarioAtual + percentualReajuste)

console.log(`Seu novo salário é de $ ${novoSalario}.`)
