function multiplicarTresNumeros(a, b, c) {
    return a * b * c;
}

console.log(multiplicarTresNumeros(2, 3, 4));

const mult = multiplicarTresNumeros(5, 9, 4);


console.log(mult);

function podeDirigir(idade, cnh) {
    console.log(`Idade: ${idade}`);
    console.log(`CNH: ${cnh}`);

    if (idade >= 18 && cnh) {
        console.log("Pode dirigir!");
    } else {
        console.log("Não pode dirigir!");
    }
}

podeDirigir(19, false);

podeDirigir(Math.floor(Math.random() * 100 + 18),  Math.random() < 0.5);