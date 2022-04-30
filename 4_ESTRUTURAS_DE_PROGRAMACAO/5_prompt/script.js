
let nome = prompt("Qual seu nome?");
let idade = prompt("Qual sua idade?");

console.log(`Olá ${nome}, você tem ${idade} anos.`);

if (nome) {
    const tittleNome = document.createElement("h1")
    tittleNome.innerText = `Olá, ${nome}`;

    // Append to body:
    document.body.appendChild(tittleNome);

} else {
    const tittleNome = document.createElement("h1")
    tittleNome.innerText = "Olá, visitante.";

    // Append to body:
    document.body.appendChild(tittleNome);
}

if (idade) {
    const subtitleIdade = document.createElement("h3");
    subtitleIdade.innerText = `Vi que você tem ${idade} anos.`;

    // Append to body:
    document.body.appendChild(subtitleIdade);
} else {
    const subtitleIdade = document.createElement("h3");
    subtitleIdade.innerText = `Você não informou sua idade.`;

    // Append to body:
    document.body.appendChild(subtitleIdade);
}

nome ? document.write(`Olá, ${nome}.`) : document.write("Olá, visitante.");

idade ? document.write(`Vi que você tem ${idade} anos.`) : document.write("Você não informou sua idade.");
