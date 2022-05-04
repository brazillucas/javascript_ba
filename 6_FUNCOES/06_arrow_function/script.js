const arrowFunction = () => {
    console.log(`Esta é uma Arrow function`);
}

arrowFunction();

console.log(arrowFunction);

let soma = (a, b) => {
    return a + b;
}

let num1 = Math.floor(Math.random() * 50 + 1);
console.log(`num1: ${num1}`);
let num2 = Math.floor(Math.random() * 50 + 1);
console.log(`num2: ${num2}`);

console.log(`Soma: ${soma(num1, num2)}`);