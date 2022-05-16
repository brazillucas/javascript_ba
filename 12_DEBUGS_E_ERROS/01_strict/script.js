"use strict"
let opa = 'oi';

var ola = 'opa';

console.log(opa);

console.log(ola);

function teste() {
    "use strict"
    let helo = 'oi';
    console.log(ola);
}

teste();

let obj = {
    p: 'oi',
    p: 'opa'
}

console.log(obj);

// false.prop = '';
teste.prop = 'Olá';

console.log(teste.prop);

console.log(teste.helo);