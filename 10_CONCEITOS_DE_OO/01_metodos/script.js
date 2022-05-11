let array = {
    nome: 'pedro',
    idade: 20,
    sexo: 'M',
    peso: 2130,
    altura: 2130,
};

// array.forEach(element => {
//     console.log(element);
// });

Object.keys(array).forEach(element => {
    console.log(`${element}: ${array[element]}`);
});