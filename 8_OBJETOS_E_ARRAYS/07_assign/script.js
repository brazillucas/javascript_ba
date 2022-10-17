let carro = {
    marca: 'Fiat',
    modelo: 'Uno',
    ano: 2020,
    cor: 'Preto'
}

let adicionais = {
    arCondicionado: true, 
    freioDisco: true, 
    airbag: true,
    cambioAutomatico: true
}

Object.assign(carro, adicionais);

console.log(carro);

adicionais.portaMalas = 200;

console.log(adicionais);