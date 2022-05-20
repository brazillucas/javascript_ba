let telefone = /\d{4,5}\s?-\s?\d{4}/;

console.log(telefone.test('54545-4444'));
console.log(telefone.test('54545 - 4444'));

let telefoneDDD = /\(\d{2}\)\s?\d{4,5}\s?-\s?\d{4}/;

console.log(telefoneDDD.test('38 54545  4444'));
console.log(telefoneDDD.test('(3) 54545 - 4444'));
console.log(telefoneDDD.test('(38) 54545 - 4444'));
console.log(telefoneDDD.test('(38)54545-4444'));
