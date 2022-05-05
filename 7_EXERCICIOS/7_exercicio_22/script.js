function modulo(numero) {
    return Math.abs(numero);
}

let num = (Math.floor(Math.random() * 100) + 1) * -1;

console.log(`O módulo de ${num} é ${modulo(num)}`);