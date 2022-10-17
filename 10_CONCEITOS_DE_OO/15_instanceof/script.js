class Mamifero {
    constructor(corPelo, quantidadeOlhos) {
        this.corPelo = corPelo;
        this.quantidadeOlhos = quantidadeOlhos;
    }
}

let coiote = new Mamifero('Preto', 2);
console.log(coiote);

class Cachorro extends Mamifero {
    constructor(corPelo, quantidadeOlhos, raca) {
        //O 'super' permite alterar as propriedades que são herdadas da classe pai
        super(corPelo, quantidadeOlhos);
        this.raca = raca;
    }
    latir() {
        console.log('Au au!');
    }
}

let caramelo = new Cachorro('Âmbar', 2, 'Vira-lata');
console.log(caramelo);

console.log(caramelo instanceof Cachorro);

console.log(coiote instanceof Mamifero);
//Precisa usar 'new' para indicar que está verificando uma classe
console.log(new Cachorro instanceof Mamifero);
