console.log(/[123]/.test('1'));
console.log(/[123]/.test('12'));
console.log(/[123]/.test('123'));
console.log(/[123]/.test('1234'));
console.log(/[123]/.test('0'));
console.log(/[0-9]/.test('35'));

const conjunto = /[12345]/;

console.log(conjunto.test('26'));

const reg2 = /[0-9]/;

console.log(reg2.test('120689'));
console.log(reg2.test(''));
