let notRegex = /[^abc]/;

console.log(notRegex.test('abc'));
console.log(notRegex.test('abcdef'));

let semLetras = /[^a-z]/;

console.log(semLetras.test('abc'));
console.log(semLetras.test('edcba'));
console.log(semLetras.test('123'));
console.log(semLetras.test('123abc'));
console.log(semLetras.test('asdasdfg3abc'));
console.log(semLetras.test('*&#$%'));