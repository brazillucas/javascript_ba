//Qualquer caractere que não seja um alfanumérico, um espaço ou um caractere de pontuação
const pontoRegex = /./;

console.log(pontoRegex.test(''));
console.log(pontoRegex.test('abc'));
console.log(pontoRegex.test('123'));
console.log(pontoRegex.test('*'));
console.log(pontoRegex.test('abc 123'));
console.log(pontoRegex.test('abc 123'));
console.log(pontoRegex.test(' '));

//Qualquer caractere numérico [0-9]
const barraDRegex = /\d/;


console.log(barraDRegex.test(''));
console.log(barraDRegex.test('abc'));
console.log(barraDRegex.test('123'));
console.log(barraDRegex.test('*'));
console.log(barraDRegex.test('abc123'));
console.log(barraDRegex.test('abc 123'));
console.log(barraDRegex.test(' '));

//Qualquer caracter que não seja só número [^0-9]
const barraDRegex2 = /^\D$/;

console.log(barraDRegex2.test(''));
console.log(barraDRegex2.test('abc'));
console.log(barraDRegex2.test('123'));
console.log(barraDRegex2.test('*'));
console.log(barraDRegex2.test('abc123'));
console.log(barraDRegex2.test('abc123'));
console.log(barraDRegex2.test('abc 123'));
console.log(barraDRegex2.test(' '));

//Qualquer conjutos de caracteres que tenha espaço em branco [\s]
const barraSRegex = /\s/;

console.log(barraSRegex.test(''));
console.log(barraSRegex.test('abc'));
console.log(barraSRegex.test('123'));
console.log(barraSRegex.test('*'));
console.log(barraSRegex.test('abc123'));
console.log(barraSRegex.test('abc 123'));
console.log(barraSRegex.test(' '));

//Qualquer conjunto que não  tenha espaço em branco [\S]
const barraSRegex2 = /\S/;

console.log(barraSRegex2.test(''));
console.log(barraSRegex2.test('abc'));
console.log(barraSRegex2.test('123'));
console.log(barraSRegex2.test('*'));
console.log(barraSRegex2.test('abc123'));
console.log(barraSRegex2.test('abc 123'));
console.log(barraSRegex2.test(' '));

//Qualquer conjunto de caracteres que não tenha caractere especial [\w]
const barraWRegex = /\w/;

console.log(barraWRegex.test(''));
console.log(barraWRegex.test('abc'));
console.log(barraWRegex.test('123'));
console.log(barraWRegex.test('*'));
console.log(barraWRegex.test('abc123'));
console.log(barraWRegex.test('abc 123'));
console.log(barraWRegex.test(' '));

//Qualquer conjunto de caracteres que tenha caractere especial [\W]
const barraWRegex2 = /\W/;

console.log(barraWRegex2.test(''));
console.log(barraWRegex2.test('abc'));
console.log(barraWRegex2.test('123'));
console.log(barraWRegex2.test('*'));
console.log(barraWRegex2.test('abc123'));
console.log(barraWRegex2.test('abc 123'));
console.log(barraWRegex2.test(' '));

//Qualquer conjunto de caracteres que tenha um espaço em branco e um número [\s\d]
const barraSDRegex = /\s\d/;

console.log(barraSDRegex.test(''));
console.log(barraSDRegex.test('abc'));
console.log(barraSDRegex.test('123'));
console.log(barraSDRegex.test('*'));
console.log(barraSDRegex.test('abc123'));
console.log(barraSDRegex.test('abc 123'));
console.log(barraSDRegex.test(' '));
