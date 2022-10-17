let arr = [1, 2, 4, 5, 6];

let arr2 = [];

function interaArray(arr) {
    if (arr.length == 0) {
        throw new Error('O array não pode estar vazio');
    } else {
        for(let i = 0; i < arr.length; i++) {
            console.log(`${i + 1}º elemento do array: ${arr[i]}`);
        }
    }
}

interaArray(arr);
// interaArray(arr2);

function arrayVazio(ar) {
    if (arr.length > 0){
        throw new Error('O array não está vazio');
    } else {
        console.log('Esse tá top');
    }
}

arrayVazio(arr);
arrayVazio(arr2);


