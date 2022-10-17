function textoLongo(texto) {
    if (texto.length > 10) {
        return `Texto muito grande`;
    }
    return `Texto dentro do limite`;
}

console.log(textoLongo('Oi, eu sou um texto muito grande'));
console.log(textoLongo('No limite'));