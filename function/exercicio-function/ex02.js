/*
02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo).
*/

function triangulo(ladoA, ladoB, ladoC) {

    if ((ladoA + ladoB > ladoC) || (ladoA + ladoC >ladoB ) || (ladoB + ladoC > ladoA)) {

        if ((ladoA != ladoB != ladoC)) {
            console.log('Isósceles')
        }
    } else {
        console.log("As medidas inseridas não correspondem ao triângulo") ;
    }

}

triangulo(1,1,1)
