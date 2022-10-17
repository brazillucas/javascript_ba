const umOuMais = /\d+/;

console.log(umOuMais.test('1'));
console.log(umOuMais.test('1232'));
console.log(umOuMais.test('adsasd'));
console.log(umOuMais.test('123adsasd'));
console.log(umOuMais.test(''));