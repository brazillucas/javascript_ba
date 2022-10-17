class tablet {
    constructor(marca, modelo, cor) {
        this.marca = marca;
        this.modelo = modelo;
        this.cor = cor;
    }
    ligar() {
        console.log('Ligando...');
    }
    desligar() {
        console.log('Desligando...');
    }
    get getMarca() {
        return this.marca;
    }
    /**
     * @param {any} marca
     */
    set setMarca(marca) {
        this.marca = marca;
    }
}

let tablet1 = new tablet('Samsung', 'Galaxy S10', 'Preto');
console.log(tablet1);
tablet1.ligar();
tablet1.desligar();
console.log(tablet1.getMarca);
tablet1.setMarca = 'Apple';
console.log(tablet1.getMarca);

