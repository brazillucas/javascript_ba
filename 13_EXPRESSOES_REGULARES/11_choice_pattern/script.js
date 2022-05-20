let lista = /\d+ (mangas?|peras?|uvas?)/;

console.log(lista.exec('1 manga'));
console.log(lista.exec('3 peras'));
console.log(lista.exec('99 uvas'));
console.log(lista.exec('5 bananas'));

console.log(lista.test('1 manga'));
console.log(lista.test('2 mangas'));
console.log(lista.test('1 pera'));
console.log(lista.test('5 peras'));
console.log(lista.test('5 uva'));
console.log(lista.test('5 uvas'));