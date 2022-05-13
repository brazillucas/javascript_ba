class Cachorro {
    constructor(nome, idade, raca) {
        this.nome = nome;
        this.idade = idade;
        this.raca = raca;
    }

    latir() {
        console.log('Au au!');
    }
}

//Cachorro.prototype.patas = 4;

let patas = Symbol();

Cachorro.prototype[patas] = 4;

console.log(Cachorro.prototype[patas]);