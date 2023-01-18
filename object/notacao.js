// Notação Literal;

const a = 1;
const b = 2;
const c = 3;

const obj1 = {a: a, b: b, c: c}; // Antes
const obj2 = {a, b, c}; // Depois

console.log(obj1, obj2);
console.log('---------------------------------------------');

const nomeAttr = 'nota';
const valorAttr = 7.89;

const obj3 = {};
obj3[nomeAttr] = valorAttr; // Antes
console.log(obj3);

const obj4 = {[nomeAttr]: valorAttr}; // Depois
console.log(obj4);
console.log('---------------------------------------------');

//definição da função dentro do objeto tbm sofreu mudanças na nova versão:
const obj5 = {
    funcao1: function () {
        // antes
    }, 
    funcao2() {
        // depois
    }
};

console.log(obj5);
console.log('---------------------------------------------');