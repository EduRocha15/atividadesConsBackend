/*
Uma revendedora de carros usados paga a seus funcionários vendedores um salário fixo por mês, mais uma comissão
também fixa para cada carro vendido e mais 5% do valor das vendas por ele efetuadas. Escrever um script que leia
o número de carros por ele vendidos, o valor total de suas vendas, o salário fixo e o valor que ele recebe por
carro vendido. Calcule e escreva o salário final do vendedor.
*/

const prompt = require('prompt-sync')();


carrosVendidios = Number (prompt("Qual quantidade de carros vendidos? "))
salarioFixo = Number(prompt("Qual o seu salario fixo? "))
valorVendas = Number( prompt("Qual o total de vendas? ").replace(',','.'))

comissaoPorcarro = Number (carrosVendidios/valorVendas)*(0.5)
comissaoFixa = Number ((valorVendas*5)/100)

salarioFinal = Number (salarioFixo+comissaoFixa+comissaoPorcarro)

console.log(salarioFinal.toFixed(2))

/*
function calcularSalarioFinal(carrosVendidios, valorVendas, salarioFixo, comissaoPorCarro){
    
    const comissaoVendas = 0.05*valorVendas

    const comissaoPorCarros = carrosVendidios* comissaoPorCarro
    
    const salarioFinal = salarioFixo+comissaoVendas+comissaoPorCarros

    return salarioFinal
}

const carrosVendidios = parseInt(prompt("Digite o numero de carros vendidos: "))

const valorVendas = parseFloat(prompt("Digite o valor das vendas: "))

const salarioFixo = parseFloat(prompt("Digite o salario fixo: "))

const comissaoPorCarro = parseFloat(prompt("Digite o valor da comissao por carro vendido: "))

const salarioFinal = calcularSalarioFinal(carrosVendidios, valorVendas, salarioFixo, comissaoPorCarro)

console.log(salarioFinal.toFixed(2))
*/