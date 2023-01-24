//Criando objetos;

const ferrari = {
    modelo: 'f40',
    velMax: 324
};

const volvo = {
    modelo: 'v40',
    velMax: 200
};

// uma forma de acessar a cadeia de objeto, ao encontrar o elemento da cadeia ele retorna;

console.log(ferrari.__proto__);
console.log(ferrari.__proto__ === Object.prototype); // O __proto__ ele aponta para Object.prototype;


// Object.prototype é um ultima cadeia depois dele não existe mais nada. ex.:

console.log(Object.prototype.__proto__); //return null.

// criando objeto função

function MeuObjeto() { }
console.log(typeof Object.prototype);
console.log(typeof MeuObjeto + ' || ' + typeof MeuObjeto.prototype);

console.log('-----------------------------------------------------')

// pecorrendo pelas cadeia de prototipos(protype chain) Herança #2;

//Object.prototype.attr0 = 'z' // Evite de manipular isso.

const avo = { attr1: 'a' };
const pai = { __proto__: avo, attr2: 'b', attr3: '3' };
const filho = { __proto__: pai, attr3: 'C' };

console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3);

console.log('---------------------------------------------------')

// Testando herança nos objetos.

//Criando objeto

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerar(a) {
        if (this.velAtual + a <= this.velMax) {
            this.velAtual += a;
        } else {
            this.velAtual = this.velMax;
        }
    },

    statusCar() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`;
    }
};

const ferrariCar = {
    modelo: 'F40',
    velMax: 324
}

const volvoCar = {
    modelo: 'V40',
    statusCar() {
        return `Volvo modelo: ${this.modelo} = ${super.statusCar()}`;
    }
}


//Relacionando os objetos : 
Object.setPrototypeOf(ferrariCar, carro);
Object.setPrototypeOf(volvoCar, carro);

console.log(ferrariCar);
console.log(volvoCar);

ferrariCar.acelerar(250);
console.log(ferrariCar.statusCar());

volvoCar.acelerar(100);
console.log(volvoCar.statusCar());

console.log('---------------------------------------------------')
// Object.create():
const pai1 = { nome: 'Pedro', corCabelo: 'preto' };

const filha1 = Object.create(pai1); // herança
filha1.nome = 'Bia'
console.log(filha1.nome + ' tem ' + filha1.corCabelo);


const filha2 = Object.create(pai1, {
    nome: { value: 'Ana', writable: false, enumerable: true } //valor inalterado
})


filha2.nome = 'Carla'
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`);

console.log(Object.keys(filha1));
console.log(Object.keys(filha2));

for(let key in filha2) {
    filha2.hasOwnProperty(key) ? console.log(key) : console.log(`Por herança: ${key}` )
}