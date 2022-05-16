function chegarNumero(num){
    let number = Number(num);
    if(isNaN(number)){
        console.log(`${number} não é um número!`);
    } else {
        console.log(`${number} é um número!`);
    }
}

chegarNumero("a");
chegarNumero(1);
chegarNumero(true);
chegarNumero(false);
chegarNumero(null);
chegarNumero(undefined);

let numero = prompt('Digite um número: ');

chegarNumero(numero);