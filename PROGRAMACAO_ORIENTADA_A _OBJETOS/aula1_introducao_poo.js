// CRIAÇÃO DE CLASSE COM ATRIBUTOS E MÉTODOS
class ContaCorrente {
    #agencia;
    conta;
    saldo;

    getAgencia() {
        return this.#agencia;
    }
    setAgencia(novaAgencia) {
        this.#agencia = novaAgencia;
    }
}

// CRIAÇÃO DE OBJETO
const pessoa = new ContaCorrente();
pessoa.conta = 12;
pessoa.saldo = 1000;

pessoa.setAgencia(4120);

pessoa.getAgencia();

// CONSTRUCTOR
class Animal {
    nome;
    raca;
    cor;

    constructor(nome,raca,cor){
        this.nome = nome;
        this.raca = raca;
        this.cor = cor;
    }
}

const cachorro = new Animal('Linda', 'Poodle', 'Branco')
console.log(cachorro.nome)