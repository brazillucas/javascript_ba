const validarDatas = /[0-31]{2}[/][0-12]{2}[/][1920-2021]{4}/;

console.log(validarDatas.test('01/01/2020'));
console.log(validarDatas.test('99/99/9999'));