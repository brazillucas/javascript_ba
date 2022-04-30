let idade = 23;
let nome = "João";

console.log(`Olá, ${nome}!`);
if (idade >= 18) {
  console.log(`Você tem ${idade} anos.`);
}

if (nome === "João" && idade >= 18) {
    console.log("Bem-vindo!");
}

let passaporte = true;

if ((nome === "João" && idade >= 18) || passaporte) {
    console.log("Liberado!");
}