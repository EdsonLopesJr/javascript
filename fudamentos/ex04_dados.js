/* 
    Para armazenar dados é necessário criarmos uma variável
    para locarmos na mémoria do computador
*/

//Declaração das variáveis:
var nomeProduto = 'Caneta';
var quantidade = 10;
var preco = 6.4;
var imposto = 1.5;
var valorTotal = preco + imposto;
console.log('--------------------------------------')

//Exibição das variáveis armazenadas:
console.log(nomeProduto);
console.log(quantidade);
console.log(preco);
console.log(imposto);
console.log(valorTotal);
console.log('--------------------------------------')

//Também é possivél alterar valores de uma 'Variáveis':
nomeProduto = 'Caneta BIC preta'
console.log(nomeProduto)
console.log('--------------------------------------')

/*
    Obs => Uma variável ela é definida com: Tipo, Identificação e Valor ou sem valor;

    tipo identificador = 'valor';
            ou
    tipo identificador;
*/

//Concatenação: 
console.log 
    ('Nome: '+ nomeProduto
    +' Preço: R$' + preco
    +' Valor total com imposto: R$' +valorTotal)
//exemplo:
console.log('1' + 1) // concatenação
console.log(1 + 1) // !concatenação
console.log('--------------------------------------')

// tipos de valores: 

var nomeFuncionario = 'Edson Lopes da Silva Junior'
var idade = 22
var isEmpregado = true
var salario = 4862.52

console.log(nomeFuncionario + '| tipo: ' + typeof nomeFuncionario)
console.log('idade '+ idade + '| tipo: ' + typeof idade)
console.log('Empregado ' + isEmpregado + '| tipo: ' + typeof isEmpregado)
console.log('Salario R$'+ salario + '| tipo: ' + typeof salario)
console.log('--------------------------------------')

// tipos de dados:

var n1 = 3 // declara variáveis goblal;
let n2 = 3 // declara variáveis local limitando seu escopo no bloco;
const n3 = 3 // declara uma constante, valor inalteravel;

{
    var n1 = 5
    let n2 = 6 // Obs => Ele não altera o valor fora do bloco.
    //n3 = 5 [Erro]
}

console.log(n1)
console.log(n2)
console.log(n3)
console.log('--------------------------------------')

