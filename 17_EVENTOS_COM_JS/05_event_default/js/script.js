let a = document.querySelector('a');

a.addEventListener('click', function(event) {
    event.preventDefault();
    console.log('O evento foi cancelado');
})