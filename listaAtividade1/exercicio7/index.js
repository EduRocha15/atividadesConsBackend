/*
Faça um script que leia duas notas de um aluno, calcule e escreva a média final deste aluno. Considerar que a
média é ponderada e que o peso das notas é 4 e 6.
*/

const prompt = require("prompt-sync")();

function calcularMedia(nota1, nota2){
    const pesoNota1 = 4
    const pesoNota2 = 6

    const mediaFinal = (nota1*pesoNota1 + nota2*pesoNota2)/ (pesoNota1+pesoNota2)

    return mediaFinal;
}

const nota1 = parseFloat(prompt('Nota1: '))
const nota2 = parseFloat(prompt('Nota2: '))

const media = calcularMedia(nota1,nota2);

console.log(media.toFixed(2))




