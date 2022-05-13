class Cachorro {
    constructor(nome, idade, peso, raca) {
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.raca = raca;
    }

    latir() {
        console.log('Au au!');
    }
}

Cachorro.prototype.patas = 4;

let chihuahua = new Cachorro('Chiuauauau', 1, 10, 'Chihuahua');

console.log(chihuahua);

chihuahua.latir();