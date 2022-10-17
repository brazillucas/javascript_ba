let a= 12;

try {
    console.log(a + b);
} catch(e) {
    console.log(`O seguinte erro foi encontrado: ${e}`);
    throw new Error(`Ocorreu um erro: ${e}`);
}

console.log('Fim do script');