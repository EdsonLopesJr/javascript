//Reference e não referencia.
const a = {nome: 'teste'}
console.log(a)

const b = a
console.log(b)

b.nome = 'opa'
console.log(a, b)
console.log('----------------------------------')

let c = 3
let d = c
console.log(c, d)
d = 4
console.log(c, d)
//Tipos primitivos não fazem referencia no local da mémoria diferente de objetos.
console.log('----------------------------------')
console.log(a, typeof a, b, typeof b) // ambos são objetos.
console.log(c, typeof c, d, typeof d) // ambos são tipos primitivos(number).
console.log('----------------------------------')

//Undefined e Null.
 let valor
console.log(valor) // undefined variavel declarada e contém na mémoria mais não foi definida.

valor = null
console.log(valor) // null variavel declarada sem espaço de mémoria.
