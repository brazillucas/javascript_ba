function Bicicleta (marca, cor, aro, preco) {
    this.marca = marca;
    this.cor = cor;
    this.aro = aro;
    this.preco = preco;
}

Bicicleta.prototype.andar = function () {
    console.log(`${this.marca} está andando`);
}

let Caloi = new Bicicleta('Caloi', 'vermelho', 17, 200);

console.log(Caloi);

Caloi.andar();

Bicicleta.prototype.pneu = function(status) {
    console.log(`${this.marca} tem um pneu ${status}`);
}

Caloi.pneu('furado');