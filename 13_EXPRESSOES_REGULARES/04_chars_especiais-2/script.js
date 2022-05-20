//Verifica se a expressão tem 2 caracteres numéricos
let dia = /\d\d/;

console.log(dia.test('01'));
console.log(dia.test('01') && '01'.length == 2);
console.log(dia.test('3200'));
console.log(dia.test('3200') && '3200'.length == 2);
console.log(dia.test('sdas'));
console.log(dia.test('123sdas'));
console.log(dia.test('1sdas'));
console.log(dia.test(34))

let palavrasTresLetras = /\w{3}/;
console.log(palavrasTresLetras.test('abc'));
console.log(palavrasTresLetras.test('abc') && 'abc'.length == 3);
console.log(palavrasTresLetras.test('abcd'));
console.log(palavrasTresLetras.test('abcd') && 'abcd'.length == 3);
console.log(palavrasTresLetras.test('ab'));
console.log(palavrasTresLetras.test('ab') && 'ab'.length == 2);

let data = /\d{2}\/\d{2}\/|d{4}/;

console.log(data.test('08/01/1999'));
console.log(data.test('99/00/1999'));

//Foi copiado da internet, não sei o que faz
let dataCorrigida = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;

console.log(dataCorrigida.test('30/04/1999'));