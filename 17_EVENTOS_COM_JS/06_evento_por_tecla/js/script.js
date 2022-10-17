window.addEventListener('keydown', function(event){
    if (event.key == 'k') {
        let palavra = document.createElement('p');
        palavra.textContent = event.key;
        palavra.style.fontSize = '20px';
        palavra.style.color = '#fff';
        palavra.style.textAlign = 'center';
        document.querySelector('#keys').append(palavra);
    }
});

window.addEventListener('keyup', function(event) {
    if (event.key == 'k') {
        while (document.querySelector('#keys').hasChildNodes()) {
            document.querySelector('#keys').removeChild(document.querySelector('p'));
        }
        let palavra = document.createElement('p');
        palavra.textContent = 'Soltou a tecla K!';
        palavra.style.fontSize = '20px';
        palavra.style.color = '#fff';
        palavra.style.textAlign = 'center';        
        document.querySelector('#keys').append(palavra);
        this.setTimeout(function() {
            
            document.querySelector('#keys').removeChild(document.querySelector('p'));
        }, 2000);
    }
});