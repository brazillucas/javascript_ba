window.addEventListener('load', () => {
    alert('Digite seu nome abaixo');
})

window.addEventListener('beforeunload', (event) => {
    event.returnValue = null;
})