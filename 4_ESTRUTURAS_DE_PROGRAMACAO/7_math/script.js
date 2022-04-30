//Declarando o array
let array = [];

//Criando um range aleatório para o array
let range = Math.floor(Math.random() * 20);

//Imprimindo o range
console.log(`Tamanho do Array: ${range}`);

//Preenchendo o Array
for (let i = 0; i < range; i++){
    array.push(Math.floor(Math.random() * 100));
}

//Imprimindo o array, o valor máximo e o valor mínimo
console.log(`Array: ${array.toString()}`);
console.log(`Maior valor: ${Math.max(...array)}`);
console.log(`Menor valor: ${Math.min(...array)}`);

//Imprimindo o array em ordem crescente
console.log(`Array em ordem crescente: ${array.sort((a, b) => a - b).join(", ")}`);

//Imprimindo o array em ordem decrescente
console.log(`Array em ordem descrescente: ${array.sort((a, b) => b-a).join(", ")}`);

//Média do array
let sum = 0;
for (let i = 0; i < array.length; i++){
    sum += array[i];
}
console.log(`Média: ${sum/array.length}`);

//Arredondar para cima
console.log(`Arredondado para cima: ${Math.ceil(sum/array.length)}`);

//Arredondar para baixo
console.log(`Arredondado para baixo: ${Math.floor(sum/array.length)}`);

//Arrendondar para o mais próximo
console.log(`Arredondado para o mais próximo: ${Math.round(sum/array.length)}`);

//Imprimindo soma negativa do array
let negativo = Math.round(sum) * -1;
console.log(`Soma Negativa: ${negativo}`);

//Imprimindo o módulo do número
console.log(`Módulo: ${Math.abs(negativo)}`);