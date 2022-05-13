let cachorro = {
    patas: 4,
    raca: 'SRD',
    cor: '',
    idade: 0,
    latir: function() {
        console.log('Au Au');
    }
}

let pitbull = Object.create(cachorro);

console.log(Object.getPrototypeOf(pitbull));

pitbull.cor = 'Preto';
pitbull.idade = 3;
pitbull.raca = 'Pitbull';
pitbull.latir();

console.log(pitbull);

console.log(pitbull.raca);
console.log(cachorro.raca);