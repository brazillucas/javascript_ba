function numero(expoente, base) {
    return Math.pow(expoente, base);
}

let num = (Math.floor(Math.random() * 10) + 1);

let num2 = (Math.floor(Math.random() * 5));

console.log(`O número ${num} elevado a ${num2} é ${numero(num, num2)}`);