let objetoA ={
    nome: 'Pedro'
}

let objetoB = objetoA;

console.log(objetoA == objetoB);

console.log(objetoA);

objetoB.nome = 'João';

console.log(objetoB);

console.log(objetoA === objetoB);


let objetoC = {
    nome: 'João'
}

console.log(objetoA === objetoC);
console.log(objetoB === objetoC);