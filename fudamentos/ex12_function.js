//Função sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}
imprimirSoma(2, 5)
imprimirSoma(2) // 2 + undefined = NaN
console.log('----------------------------------')

//Funçao com retorno
function soma(a = 0, b = 0) { // tratando os paramentros recebendo valores padrão caso não seja declarado nenhuma valor
    return a + b 
}
console.log(soma(2, 5))
console.log(soma(2)) //apenas com um valor declarado no parametro
console.log(soma()) //Sem valor
console.log('----------------------------------')

//Função dentro de uma variavel
const imprimirSoma2 = function (a, b) {
    console.log(a + b)
}

imprimirSoma2(2, 5)
console.log('----------------------------------')

// Função Arrow

const soma2 = (a, b) => {
    return a + b
}
console.log(soma2(2, 5))

// Função Arrow sem Retorno

const subtração = (a, b) => a - b
console.log(subtração(2, 5))

const pot = a => Math.pow(a, 2)
console.log(pot(5))