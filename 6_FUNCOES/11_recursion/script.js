function recursao(n) {
    if(n - 1 < 2) {
        console.log(`Recursão parou!`);
    } else if (n % 2 != 0) {
        console.log(`${n} é impar!`);
        recursao(n - 1);
    } else {
        console.log(`${n} é par!`);
        recursao(n - 2);
    }
}

let num = Math.floor(Math.random() * 20) + 2;

recursao(num);