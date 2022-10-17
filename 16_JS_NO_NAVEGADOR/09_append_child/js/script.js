let novoElemento = document.createElement('p');
let texto = document.createTextNode('Novo parágrafo');

novoElemento.appendChild(texto);

let p = document.querySelector('#paragrafo-box');

let pai = p.parentNode;
// console.log(pai);
pai.appendChild(novoElemento);

let camoes = document.createElement('p');

camoes.appendChild(document.createTextNode(`<em>Os bons vi sempre passar<br>
No mundo graves tormentos;<br>
E para mais me espantar<br>
Os maus vi sempre nadar<br>
Em mar de contentamentos.</em>`));

//usar innetHTML para poder utilizar tags html
document.querySelector('#paragrafo-box').innerHTML = camoes.textContent;