const validaEmail = /\w+@\w+\.\w+/;

console.log(validaEmail.test('lucas@gmail.com'));
console.log(validaEmail.test('lucas@gmail'));
console.log(validaEmail.test('gmail.com'));
console.log(validaEmail.test('lucas@gmail.com.br'));
console.log(validaEmail.test('LUCAS@GMAIL.COM.BR'));