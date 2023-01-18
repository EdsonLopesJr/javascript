//getters e setters

const sequencia = {
    _valor: 1, // Uso do _ para indicar que o atributo é privado, é acessado apenas dentro do objeto.
    get valor() {
        return this._valor++; // get é usado para obter resultados da função do objeto.
    },

    set valor(valor) {
        if(valor > this._valor) {
            this._valor = valor // set é usado definir regras ou para validar o valor, para que o usuário não informe valor invalido.
        }
    }
}

console.log(sequencia.valor, sequencia.valor);
sequencia.valor = 1000

console.log(sequencia.valor, sequencia.valor);
sequencia.valor = 900
console.log(sequencia.valor, sequencia.valor);