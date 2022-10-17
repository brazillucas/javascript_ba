console.log("Iniciando Testes...");

let a = Math.floor(Math.random() * 10 + 1);
console.log(`A: ${a}`);
let b = Math.floor(Math.random() * 10 + 1);
console.log(`B: ${b}`);

let potencia = Math.pow(a, b);
console.log(`Potência: ${potencia}`);

console.log(Object.keys({potencia})[0]);

