let camoes = document.createElement('p');

//usar innetHTML para poder utilizar tags html
// document.querySelector('#paragrafo-box').innerHTML = camoes.textContent;

let poema = document.createTextNode(`<em>Os bons vi sempre passar<br>
    No mundo graves tormentos;<br>
    E para mais me espantar<br>
    Os maus vi sempre nadar<br>
    Em mar de contentamentos.</em>`)

camoes.innerHTML = poema.textContent;

let troca = document.querySelector('#paragrafo-box');
let paiTroca = troca.parentNode;

paiTroca.replaceChild(camoes, troca);