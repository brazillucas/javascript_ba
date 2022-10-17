let idade = 17;
let nome = "João";

console.log(`Olá, ${nome}!`);
if (idade >= 18) {
  console.log(`Você tem ${idade} anos.`);
} else {
  console.log(`Você não é maior de idade.`);
}

if (nome === "João" && idade >= 18) {
    console.log("Bem-vindo!");
} else {
  console.log("Você não tem acesso.");
}

let passaporte = false;

if ((nome === "João" && idade >= 18) || passaporte) {
    console.log("Liberado!");
} else {
  console.log("Você não foi liberado.");
}