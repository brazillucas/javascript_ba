let pessoa = {
    nome: '',
    setNome: function(novoNome) {
        this.nome = novoNome;
    },
    getNome: function() {
        return this.nome;
    },
    idade: 30,
    getIdade: function() {
        return this.idade;
    },
    peso: 80,
    fazerAniversario: function() {
        this.idade++;
    }
}

pessoa.setNome('Lucas');

console.log(pessoa.getNome());
//saída: lucas
console.log(pessoa.getIdade());
//saída: 30
pessoa.fazerAniversario();
//Aumenta a idade em 1
console.log(pessoa.getIdade());
//Sai: 31