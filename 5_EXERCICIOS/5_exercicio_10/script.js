let velocidade = Math.floor(Math.random() * 100 + 60);

if (velocidade > 80) {
    console.log("MULTADO! Você ultrapassou o limite de velocidade!");
    console.log(`A multa custa R$ ${(velocidade - 80) * 7},00`);
    console.log(`Sua velocidade foi de ${velocidade}km/h`);
} else {
    console.log("Dirija sempre usando cinto de segurança!");
    console.log(`Sua velocidade foi de ${velocidade}km/h`);
}