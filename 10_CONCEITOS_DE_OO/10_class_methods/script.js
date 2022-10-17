class Biscoito {
    constructor(sabor, massa, recheio, marca) {
        this.sabor = sabor;
        this.massa = massa;
        this.recheio = recheio;
        this.marca = marca;
    }
}

let chocolate = new Biscoito('chocolate', 'fino', 'leite condensado', 'Nestlé');
console.log(chocolate);

Biscoito.prototype.descricao = function () {
    return `${this.sabor} ${this.massa} ${this.recheio} ${this.marca}`;
}

Biscoito.prototype.marca = 'Mabel';

console.log(Biscoito.prototype.marca);
console.log(chocolate.marca);

