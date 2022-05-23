let itens = document.querySelectorAll('.lista-azul');

console.log(itens);

for (let i = 0; i < itens.length; i++) {
    itens[i].style.color = 'blue';
}