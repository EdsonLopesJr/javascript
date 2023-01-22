// Funções Importante de Objetos.

const pessoa = {
    nome: 'Edson',
    idade: 22,
    peso: 62
};

console.log(Object.keys(pessoa)); // Mostra todos chaves(atributos) do Objetos.
console.log(Object.values(pessoa)); // Mostra todos o valores do objtos.
console.log(Object.entries(pessoa)); // Mostra todas chaves e valores do objeto como array. 

console.log('----------------------------------------------------------');

Object.entries(pessoa).forEach(([key, value]) => { // Usando destructuring
    console.log(`${key}: ${value}`)
});

console.log('----------------------------------------------------------');

Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)
});

console.log('----------------------------------------------------------');

Object.defineProperty(pessoa, 'dataNasc', {
    enumerable: true, // enumerar a chave
    writable: false, // escrever ou sobreEscrever o valor
    value: '19/06/2000' // valor;

});

pessoa.dataNasc = '20/06/2001';
console.log(pessoa.dataNasc)
console.log(Object.keys(pessoa))