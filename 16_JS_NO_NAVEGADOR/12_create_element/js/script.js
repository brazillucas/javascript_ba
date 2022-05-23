let lista = document.createElement('ul');

for (let i = 0; i < 5; i++) {
    let item = document.createElement('li');

    let texto = document.createTextNode(`Item ${i + 1}`);

    item.appendChild(texto);

    lista.appendChild(item);
}

let container = document.getElementById('container-listas');

// document.getElementById('titulo2').insertAdjacentElement('afterend', lista);

container.appendChild(lista);