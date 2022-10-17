let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let letras = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];

let booleans = [true, false, true, false, true, false, true, false, true, false];

let indexnum = Math.floor(Math.random() * numeros.length);

let indexletra = Math.floor(Math.random() * letras.length);

let indexbool = Math.floor(Math.random() * booleans.length);

console.log(`O número sorteado é: ${numeros[indexnum]}`);

console.log(`A letra sorteada é: ${letras[indexletra]}`);

console.log(`O booleano sorteado é: ${booleans[indexbool]}`);

console.log(`O último número é: ${numeros[numeros.length - 1]}`);

console.log(`A última letra é: ${letras[letras.length - 1]}`);

console.log(`O último booleano é: ${booleans[booleans.length - 1]}`);