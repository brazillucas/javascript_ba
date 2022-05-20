let questionRegex = /Fo?rma/;


console.log(questionRegex.test('Fôrma'));
console.log(questionRegex.test('Forma'));
console.log(questionRegex.test('Frma'));

let padrao = /\d+\w?/;

console.log(padrao.test('123'));
console.log(padrao.test('123abc'));
console.log(padrao.test('abc'));
console.log(padrao.test('1'));
console.log(padrao.test('1b'));
console.log(padrao.test('1 '));