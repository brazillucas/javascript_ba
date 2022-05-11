const person = {
    nome: 'Lucas',
    sobrenome: 'Costa'
}

let { nome: firstName, sobrenome: lastName } = person;
console.log(firstName, lastName);

firstName = 'João';

console.log(firstName);