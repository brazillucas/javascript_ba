let btn = document.querySelector('#btn');


btn.addEventListener('click', () => {
    let retangulo = document.querySelector('#retangulo');
    retangulo.style.width = '200px';
    retangulo.style.height = '100px';
    retangulo.style.background = '#2d4654';
    retangulo.style.borderRadius = '10px';
    retangulo.style.border = '5px solid #fcfc62';
    retangulo.style.margin = '10px';

    btn.style.border = 'none';
    btn.style.backgroundColor = '#413c58';
    btn.style.color = 'white';
})