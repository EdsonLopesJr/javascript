// Notação Literal
const obj1 = {}
console.log(obj1)

//Object em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object;
console.log(obj2)

//Funções construtoras
function Produto(nome, preco, desc) {
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto ('Caneta', 7.99, 0.15)
const p2 = new Produto ('Notebook', 2300.99, 0.25)

console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())
console.log(typeof Produto)
console.log(typeof p1)
console.log(typeof p2)

// Funções Factory 
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}


const f1 = criarFuncionario('João', 7980, 4)
const f2 = criarFuncionario('Maria', 11400, 1)

console.log (f1.getSalario(), f2.getSalario())

console.log(typeof criarFuncionario())
console.log(typeof f1)
console.log(typeof f2)

// Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)


//Função que Retorna objeto
const fromJSON = JSON.parse('{"info": "sou um JSON"}')
console.log(typeof fromJSON)
console.log(fromJSON.info)