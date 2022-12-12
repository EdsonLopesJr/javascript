const curso = "JavaScript"

//Manipulando indice de uma string
console.log('Letras Indice')
console.log('  '+ curso.charAt(0) + '     (0)')
console.log('  '+ curso.charAt(1) + '     (1)')
console.log('  '+ curso.charAt(2) + '     (2)')
console.log('  '+ curso.charAt(3) + '     (3)')
console.log('')
console.log('  '+ curso.charAt(4) + '     (4)')
console.log('  '+ curso.charAt(5) + '     (5)')
console.log('  '+ curso.charAt(6) + '     (6)')
console.log('  '+ curso.charAt(7) + '     (7)')
console.log('  '+ curso.charAt(8) + '     (8)')
console.log('  '+ curso.charAt(9) + '     (9)')

//Indice da Letra informada.
console.log(curso.indexOf('S')) 

//sobreescrevendo uma string
console.log(curso.substring(0, 4)) //observe que ele não sobreescreve o ultimo indice.
console.log(curso.substring(4, 10))

//concatenação
console.log('Curso '.concat(curso).concat('!'))//Juntando strings

//Substituindo letras
console.log(curso.replace('t', 7))

//Transformando string em Arrays
console.log('Edson,  Ana, Jennifer'.split(','))

//Template String
console.log(`Bem vindo ao curso de ${curso}`)
const up = texto => texto.toUpperCase()
console.log(`Curso ${up('JavaScript')}`)
