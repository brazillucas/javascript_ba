let novoElemento = document.createElement('p');
let texto = document.createTextNode('Desenvolvedor programando em Javascript:');

novoElemento.appendChild(texto);

let elementoAlvo = document.querySelector('#dev-img');
let elementoPai = document.querySelector('#container-secundario');

elementoPai.insertBefore(novoElemento, elementoAlvo);