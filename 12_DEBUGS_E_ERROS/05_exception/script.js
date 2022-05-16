function saudacao(nome) {
    if (typeof nome != 'string') {
        throw new Error('Nome precisa ser uma string')
    } else {
        console.log(`Olá ${nome}.`)
    }
}

let pergunta = prompt('Digite seu nome: ');

saudacao(pergunta);