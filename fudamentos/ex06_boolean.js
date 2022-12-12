// valores boolean
let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)
// Podem ser tanto verdadeiro(true) ou falso(false)
console.log('------------------------------------')

console.log('Boolean verdadeiros: ')
console.log(!!(isAtivo = true))
console.log(!!1)
console.log(!!-1)
console.log(!!'texto')
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log('------------------------------------')

console.log('Boolean falsos: ')
console.log(!!(isAtivo = false))
console.log(!!0)
console.log(!!'')
console.log(!!NaN)
console.log(!!null)
console.log(!!undefined)
console.log('------------------------------------')

