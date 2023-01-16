/*
03) Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.
*/

function potencia(base, expoente) {
    baseFixa = base;
    for (let cont = 1; cont < expoente; cont++) {
        base *=  baseFixa
    }
    return base;
}

console.log(potencia(2,3))