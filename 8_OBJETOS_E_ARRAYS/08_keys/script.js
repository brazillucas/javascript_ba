let casa = {
    quartos: 4,
    banheiros: 2,
    garagem: 1,
    mobilia: true
}

console.log(Object.keys(casa));
console.log(Object.values(casa));
console.log(Object.entries(casa));
console.log(`Propriedade: ${Object.keys(casa)[0]} \nValor: ${Object.values(casa)[0]}`);

Object.keys(casa).forEach(key => {
    console.log(`Propriedade: ${key} \nValor: ${casa[key]}`);
})
