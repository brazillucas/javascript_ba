let validarIP = /^\d{1,3}\.\d{1,3}.\d{1,3}\.\d{1,3}$/;

console.log(validarIP.test('192.168.0.1'));
console.log(validarIP.test('10.0.0.1'));
console.log(validarIP.test('1.0.0.1'));
console.log(validarIP.test('1024.655.3.56'));