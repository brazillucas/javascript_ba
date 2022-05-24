let btn = document.querySelector('#btn');
let btn2 = document.querySelector('#btn2');
let p = document.querySelector('p');

function msg (event) {
    // alert('Executei o evento!');
    console.log(event);
    event.stopPropagation();
}

btn.addEventListener('click', msg);

btn2.addEventListener('click', function(evento) {
    console.log(evento)
});

p.addEventListener('click', function() {
    console.log('clicou no paragráfo');
})