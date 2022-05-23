console.log('Início');

setTimeout(function() {
    console.log('Se liga no Callback');
}, 2000);

console.log('Ainda não chamou o Callback');
console.log('Fim');

console.log('Será que o Callback será chamado primeiro?');