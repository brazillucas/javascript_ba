let marca = /Marca\: (Nike|Adidas|Puma|Asics)/;

console.log(marca.test('Marca: Nike'));
console.log(marca.test('Marca: Adidas'));
console.log(marca.test('Marca: Puma'));
console.log(marca.test('Marca: Asicss'));

console.log(marca.test('Marca: nike'));
console.log(marca.test('Marca: adidas'));
console.log(marca.test('Marca: puma'));
console.log(marca.test('Marca: asics'));

console.log(marca.test('Marca: NIKE'));
console.log(marca.test('Marca: ADIDAS'));
console.log(marca.test('Marca: PUMA'));
console.log(marca.test('Marca: ASICS'));