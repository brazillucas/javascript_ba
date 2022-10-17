class carro {
    constructor(marca, modelo, ano, placa, cor, gasolina, consumo) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.placa = placa;
        this.cor = cor;
        this.gasolina = gasolina;
        this.consumo = consumo;
    }

    digirirCarro(km) {
        let consumido = km / this.consumo;
        this.gasolina -= consumido;
        console.log(`${this.modelo} ${this.cor} com ${Math.round(this.gasolina)} litros`);
    }

    abastecerCarro(litros) {
        this.gasolina += litros;
        console.log(`${this.modelo} ${this.cor} abastecido com ${Math.round(this.gasolina)} litros`);
    }
}

let carro1 = new carro('Ford', 'Fusion', '2020', 'ABC1234', 'Branco', 50, 10);
let carro2 = new carro('Chevrolet', 'Onix', '2020', 'DEF5678', 'Preto', 50, 11);
let carro3 = new carro('Fiat', 'Uno', '2020', 'GHI9012', 'Vermelho', 50, 14);

carro1.digirirCarro(50);
carro2.digirirCarro(10);
carro3.digirirCarro(100);

carro1.abastecerCarro(25);
carro2.abastecerCarro(30);
carro3.abastecerCarro(35);

