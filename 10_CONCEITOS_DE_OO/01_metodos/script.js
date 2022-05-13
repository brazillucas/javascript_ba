let gato = {
    nome: 'Felix',
    idade: 3,
    peso: 3,
    miar: function() {
        console.log('Miau!');
    },
    comer: function(comida) {
        console.log(`${this.nome} está comendo ${comida}`);
    }
}

gato.miar();
gato.comer('ração');