function soma (a, b){
    if (b === undefined){
        console.log(`Esta função precisa de dois argumentos`);
    } else {
        return a + b;
    }
}

console.log(soma(2));

console.log(soma(2,3));

function saudacao(nome, idade) {
    if (idade === undefined){
        console.log(`Olá ${nome}`);
    } else {
        console.log(`Olá ${nome}, você tem ${idade} anos`);
    }
}

saudacao('João');

saudacao('Lucas', 18);