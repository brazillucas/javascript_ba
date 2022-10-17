function decrementa(numero) {
    for(numero; numero > 0; numero--) {
        if (numero % 2 === 0){
            console.log(numero);
        }
    }
}

let num = (Math.floor(Math.random() * 100) + 1);
console.log(`O número é: ${num}`);

decrementa(num);