let idade = Math.floor(Math.random() * 57 + 13);
console.log(`Idade: ${idade}`);

let cnh;

idade > 17 ? cnh = Math.random() < 0.51 : cnh = false;
console.log(`CNH: ${cnh}`);

if (cnh) {
    console.log("Liberado!");
} else if (idade >= 18) {
    console.log("Você precisa comprar uma CNH!");
} else {
    console.log("Você não foi liberado!");
}