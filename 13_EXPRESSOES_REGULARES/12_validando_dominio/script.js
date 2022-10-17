const validaDominio = /[?www.]\w+.com.br|com/;

console.log(validaDominio.test('www.google.com'));
console.log(validaDominio.test('www.google.com.br'));
console.log(validaDominio.test('www.google.me'));
console.log(validaDominio.test('www.google.com.ru'));
console.log(validaDominio.test('www.google'));
console.log(validaDominio.test('google.com'));