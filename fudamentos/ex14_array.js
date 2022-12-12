//Declaração de um array
const valores = [7.7, 9.2 , 6, 5.5, 0, -5]
console.log(valores, typeof valores) //Arrays em JavaScript são objetos

//Adicionando valores
console.log(valores.length)
console.log(valores[6]) //Valores que não existe dentro de um array não gera erros, ele considera no indice inexistente como indefinido.
valores[6] = 10
console.log(valores[6])

valores.push({id: 1}, false, null, 'teste') //outra forma de adicionar valores, e note que em JS, os arrays atribui varios tipos de valores.
console.log(valores)

//Apagando valores:
console.log(valores.pop()) //apaga o ultimo adicionado e mostra quem foi apagado
delete valores[0]
console.log(valores)

