const multiplicar = (a,b) => {
    return a * b;
}

const num1 = Math.floor(Math.random() * 10 + 1);
const num2 = Math.floor(Math.random() * 10 + 1);

console.log(`Número 1: ${num1}\nNúmero 2: ${num2}`);

console.log(`Multiplicado: ${multiplicar(num1,num2)}`);

const quadrado = x => x * x;

console.log(`Quadrado de ${num1}: ${quadrado(num1)}`);
console.log(`Quadrado de ${num2}: ${quadrado(num2)}`);
