/*
02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo).
*/

function triangulo(ladoA, ladoB, ladoC) {

    if((ladoA + ladoB < ladoC) || (ladoC + ladoB < ladoA) || (ladoA + ladoC < ladoB) ) {
        return 'Não compõe em um triângulo'
    } else if (ladoA == ladoB && ladoB == ladoC){
        return 'Equilátero'
    } else if (ladoA == ladoB || ladoB == ladoC || ladoA == ladoC) {
        return 'Isósceles'
    } else {
        return 'Escaleno'
    }
      
}

console.log(triangulo(1,2, 5))
console.log(triangulo(15, 15, 15))
console.log(triangulo(15, 10, 15))
console.log(triangulo(15, 10, 5))
