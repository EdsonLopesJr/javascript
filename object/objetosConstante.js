// pessoa -> atributo(nome) -> pedro
const pessoa = {nome: 'Pedro'};
pessoa.nome = 'Edson' ;

console.log(pessoa);

// const pessoa = {nome: 'Ana'} => Error.: a constante só pode ser declarado apenas uma vez.
// console.log(pessoa.nome)  

const pessoaConstante = Object.freeze({nome: 'Flavia'}); // impossibilita alterar, adicionar, excluir.
pessoaConstante.nome = 'Ana';
pessoaConstante.idade = 16;
delete pessoaConstante.nome;

console.log(pessoaConstante);
