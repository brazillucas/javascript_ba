let arr = [1, 2, 3, 4, 5];

let array = [6, 7, 8, 9];

function tamanho (array) {
    if (array.length < 5) {
        return 'Poucos elementos!'
    }
    return 'Muitos elementos!'
}

console.log(tamanho(arr));
console.log(tamanho(array));