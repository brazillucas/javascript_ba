let elemento = document.querySelector('#retangulo');
let texto = document.querySelector('#tituloPrincipal');
let imagem = document.querySelector('#dev-img');

console.log(`Largura imagem com borda: ${imagem.offsetWidth}`);
console.log(`Altura imagem com borda: ${imagem.offsetHeight}`);
console.log(`\nLargura imagem sem borda: ${imagem.clientWidth}`);
console.log(`Altura imagem sem borda: ${imagem.clientHeight}`);

console.log(`\nLargura título com borda: ${texto.offsetWidth}`);
console.log(`Altura título com borda: ${texto.offsetHeight}`);

console.log(`\nLargura título sem borda: ${texto.clientWidth}`);
console.log(`Altura título sem borda: ${texto.clientHeight}`);

console.log(`\nLargura retângulo: ${elemento.offsetWidth}`);
console.log(`Altura retângulo: ${elemento.offsetHeight}`);

