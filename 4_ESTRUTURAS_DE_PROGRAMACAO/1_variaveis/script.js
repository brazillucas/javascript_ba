let nome = "Android";
let idade = 23;
let vivo = true;
let frase = "Javascript é o melhor lingagem de programação";
let lista = ["Manga", "Pêra", "Laranja", "mamão", "Abacaxi"];

console.log(`Meu nome é ${nome} e tenho ${idade} anos`);
console.log(`Eu estou vivo? ${vivo}`);
console.log(`${frase}`);
console.log(`Essas são minhas frutas preferidas: ${lista}`);

idade = "Vinte e três";
console.log(`Meu nome é ${nome} e tenho ${idade} anos`);

Object.keys({ nome, idade, vivo, frase, lista }).forEach(key => {
    (key === "lista") ? console.log(`${key}: ${eval(key).join(", ")}`) : console.log(`${key}: ${eval(key)}`);
});