function Geladeira(marca, capacidade) {
    this.marca = marca;
    this.capacidade = capacidade;
}

let brastemp = new Geladeira('Brastemp', '15 litros');

console.log(brastemp);

console.log(`essa é uma geladeira da marca ${brastemp.marca} e com ${brastemp.capacidade} de capacidade`);