const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

/*
Uma empresa concederá um aumento de salário aos seus funcionários, variável de acordo com o cargo, conforme a
tabela abaixo. Faça uma api que leia o salário e o código do cargo de um funcionário e calcule o seu novo
salário. Se o cargo do funcionário não estiver na tabela, ele deverá receber 15% de aumento. Mostre o salário
antigo, o novo salário e a diferença entre ambos.

Código do Cargo -> Percentual:
    • 101 -> 5%
    • 102 -> 7,5%
    • 103 -> 10%
*/

app.post('/exercicio8', (req, res) => {

    const { salario, codigoCargo } = req.body;
    
    let percentual;
    switch (codigoCargo) {
        case 101:
            percentual = 0.05;
            break;
        case 102:
            percentual = 0.075;
            break;
        case 103:
            percentual = 0.1;
            break;
        default:
            percentual = 0.15;
    }

    const novoSalario = salario * (1 + percentual);
    const diferencaSalario = novoSalario - salario;

    res.json({
        salarioAntigo: salario,
        novoSalario,
        diferencaSalario
    });

})

app.listen(port, () => {
    console.log("Aplicação iniciada em http://localhost:3000")
})