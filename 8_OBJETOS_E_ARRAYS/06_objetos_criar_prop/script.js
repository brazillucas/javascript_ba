let pessoa = {
    nome: 'João',
    idade: 20,
    profissao: 'Programador',
} 

console.log(pessoa.nome);

console.log(pessoa.idade);

// Deletando propriedade do objeto
delete pessoa.idade;

console.log(pessoa.idade);

// Adicionando propriedades ao objeto
pessoa.casado = false;
pessoa.idade = 29;
pessoa.careca = true;

console.log(pessoa.casado);
console.log(pessoa.idade);
console.log(pessoa.careca);
