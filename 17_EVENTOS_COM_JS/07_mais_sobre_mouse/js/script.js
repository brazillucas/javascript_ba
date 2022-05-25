let btn = document.querySelector('#btn');

btn.addEventListener('mousedown', () => {
    console.log('Botão pressionado');
})

btn.addEventListener('mouseup', () => {
    console.log('Botão solto');
})

let btn2 = document.querySelector('#btn2');

btn2.addEventListener('dblclick', () => {
    console.log('Botão dois cliques');
})

btn2.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    console.log('Botão direito pressionado!');
})