function carteira(idade) {
    if (idade < 18) {
        return `você não pode entrar para a autoescola.`;
    }
    return `Você pode entrar para a autoescola.`;
}

let idade = Math.floor(Math.random() * 60) + 15;

console.log(`Idade: ${idade}.\n${carteira(idade)}`);
console.log(`Idade: ${18}.\n${carteira(18)}`);
console.log(`Idade: ${17}.\n${carteira(17)}`);
console.log(`Idade: ${15}.\n${carteira(15)}`);
