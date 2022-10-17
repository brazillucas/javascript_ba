let texto = document.querySelector('#texto')

texto.addEventListener('focus', function () {
    console.log('Foco no elemento');
});

texto.addEventListener('blur', () => {
    console.log('Perdeu o foco');
})