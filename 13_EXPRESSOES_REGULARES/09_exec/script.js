let digitos = /\d+/;

console.log(digitos.exec('956as'));
console.log(digitos.exec('956'));
console.log(digitos.exec('asdasd'));

//Verifica se 'hello ' aparece e retorna também o próximo conjunto de caracteres que não tenha espaço em branco [\S]
var matches = /(hello \S+)/.exec('This is a hello world! Hello world!');
console.log(matches);

