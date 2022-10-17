// let usuarioRegex = /^([a-z]_?-?[a-z]?[0-9]?){3,16}$/;
let usuarioRegex = /^(?=.{3,16}$)([a-z0-9-_])/;

console.log(usuarioRegex.test('asd1234_-'));
console.log(usuarioRegex.test('asd1234_-asdasdad'));