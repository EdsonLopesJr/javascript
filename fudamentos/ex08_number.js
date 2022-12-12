const pesoNota1 = 1.0
const pesoNota2 = Number('2.0') // Transformando tipo string em number

console.log(pesoNota1 + ' [' +typeof pesoNota1+ ']')
console.log(pesoNota2 + ' [' +typeof pesoNota2+ ']')
console.log('----------------------------------')
// verificando se o valor é inteiro:

console.log(Number.isInteger(pesoNota1))
console.log(Number.isInteger(pesoNota2))
let n = 2.1
console.log(Number.isInteger(n))
console.log('----------------------------------')

// vendo alguns comportamentos Number.
const nota1 = 9.871
const nota2 = 6.871

const total = nota1 * pesoNota1 + nota2 * pesoNota2
const media =  total / (pesoNota1 + pesoNota2)

console.log(media.toFixed(2) +' ['+ typeof media + ']') // redondar valor com casa decimal
console.log(media.toString(2) +' ['+ typeof media.toString(2) + ']') // valor binário
console.log(Number.isInteger(media))
console.log('----------------------------------')
