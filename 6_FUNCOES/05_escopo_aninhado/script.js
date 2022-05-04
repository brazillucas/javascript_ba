let a = 10;

function multiplicar (x, y) {
    console.log(`X: ${x}`);
    console.log(`Y: ${y}`);
    let a = x * y;
    
    if (a > 10) {
        let a = 6 * 2;
        console.log(a);
    } else {
        let a = x / y;
        console.log(a);
    }

    console.log(a);
}

multiplicar(Math.floor(Math.random() * 11 + 1), Math.floor(Math.random() * 11 + 1));

console.log(a);