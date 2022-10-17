function lembrarSoma(x) {
  return function(y) {
      console.log(`y = ${y}`);
      console.log(`x: ${x}`);
    return x + y;
  };
}

let soma1 = lembrarSoma(10);
console.log(soma1(20));

console.log("Segunda");

let soma2 = lembrarSoma(20);
console.log(soma2(30));

function contador(i) {
    let cont= i;
    let somarContador = function() {
        console.log(cont);
        cont++;
    }
    return somarContador;
}

let meuContador = contador(10);

meuContador();