/*
01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
multiplicação e divisão desses valores.
*/

function calc(a, b) {
    soma = a + b;
    sub = a - b;
    mult = a * b;
    div = a / b;

    console.log(`
        ${a} + ${b} = ${soma}
        ${a} - ${b} = ${sub}
        ${a} * ${b} = ${mult}
        ${a} / ${b} = ${div}
    `)
}

calc(5, 2)