let identificador = /\d+ID\b/;

console.log(identificador.test('1ID'));
console.log(identificador.test('123ID'));
console.log(identificador.test('1122'));
console.log(identificador.test('1iD'));
console.log(identificador.test('1Id'));
console.log(identificador.test('ID'));