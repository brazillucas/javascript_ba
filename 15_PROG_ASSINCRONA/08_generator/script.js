function* geradorDeIDs() {
    let index = 0;
    while (true) {
        yield index++;
    }
}

const GERADOR = geradorDeIDs();

console.log(GERADOR.next().value);
console.log(GERADOR.next().value);
console.log(GERADOR.next().value);
console.log(GERADOR.next().value);
console.log(GERADOR.next().value);
console.log(GERADOR.next().value);
console.log(GERADOR.next().value);
console.log(GERADOR.next().value);
console.log(GERADOR.next().value);
console.log(GERADOR);

for (let i=0; i<10; i++) {
    console.log(GERADOR.next().value);
}