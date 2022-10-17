let btn = document.querySelector('#btn');

btn.addEventListener('mouseover', () => {
    console.log('Mouse está sobre o botão');
    btn.style.backgroundColor = '#f00';
    btn.style.width = '400px';
    btn.style.height = '200px';
});

window.addEventListener('mouseover', (e) => {
    console.log(e.x);
    console.log(e.y);
});