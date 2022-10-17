/* function imprimirNumeros(...numeros) {
    for (let i = 0; i < numeros.length; i++) {
        console.log(numeros[i]);
    }
} */

function imprimirNums(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }
}

let num = 1;
let num2 = 2;
let num3 = 3;
let num4 = 4;
let num5 = 5;
let num6 = 6;
let num7 = 7;
console.log("Com variáveis");
imprimirNums(num, num2, num3, num4, num5, num6, num7);
console.log("Com parâmetros");
imprimirNums(1, 2, 3, 4, 5, 6, 7);