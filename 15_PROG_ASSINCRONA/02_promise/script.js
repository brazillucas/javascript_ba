let promessa = Promise.resolve(9 + 8);

console.log(promessa);

promessa.then((valor) => {
    console.log(`O resultado é: ${valor}`);
});

let promessa2 = Promise.resolve('Promessa com texto hehehe');

promessa2.then((value) => {return value + ' eu gosto disto'})
.then((valor) => {console.log(`O resultado é: ${valor}`);});