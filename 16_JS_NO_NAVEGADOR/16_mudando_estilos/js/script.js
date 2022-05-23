//criando um retangulo vermelho com borda gradiente a partir de uma div

let retangulo = document.querySelector('#retangulo');

setTimeout(() => {
    //configurando altura, largura e cor
    retangulo.style.height = '80px';
    retangulo.style.width = '200px';
    retangulo.style.background = 'red';
}, 600);

setTimeout(() => {
    //configurando display e alinhamento
    retangulo.style.display = 'flex';
    retangulo.style.justifyContent = 'center';
    retangulo.style.alignItems = 'center';
    retangulo.style.flexWrap = 'wrap';
}, 900);

setTimeout(() => {
    //Configurando margem e espaçamento
    retangulo.style.padding = '20px 0';
    retangulo.style.margin = '25px';
}, 1200);

setTimeout(() => {
    //borda com gradiente
    retangulo.style.border = '5px solid transparent';
    retangulo.style.borderImage = 'linear-gradient(to right, green, lightgreen) 1';
    retangulo.style.borderImageSlice = '1';
    retangulo.style.borderRadius = '12px';
}, 1500);

setTimeout(() => {
    //Adicionando um paragráfo dentro da div
    let paragrafo = document.createElement('p');
    paragrafo.textContent = 'Olá, eu sou um parágrafo';
    retangulo.appendChild(paragrafo);
}, 1800);

setTimeout(() => {
    //Configurando textos dentro do retângulo
    retangulo.style.color = 'white';
    retangulo.style.fontSize = '20px';
    retangulo.style.textAlign = 'center';
    retangulo.style.fontFamily = "'Roboto', sans-serif"; //Usando aspas duplas pois seria necessário aspas simples para o nome da fonte
}, 2100);