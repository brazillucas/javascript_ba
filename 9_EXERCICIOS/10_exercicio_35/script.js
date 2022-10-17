let calculadora = {
    somar: function(a, b) {
        return a + b;
    },
    subtrair: function(a, b) {
        return a - b
    },
    multiplicar: function(a, b) {
        return a * b;
    }, 
    dividir: function(a, b) {
        return a / b;
    }
}

console.log(`${calculadora.somar(2, 45)}`);
console.log(`${calculadora.subtrair(664,654)}`);
console.log(`${calculadora.multiplicar(5, 9)}`);
console.log(`${calculadora.dividir(256, 64)}`);