let a = Math.floor(Math.random() * 10);
let b = Math.floor(Math.random() * 10);

if (a > b) {
  console.log(`O maior é A: ${a}`);
} else if (b > a) {
  console.log(`O maior é B: ${b}`);
} else {
  console.log(`Os dois são iguais`);
}

console.log(`A = ${a}`);
console.log(`B = ${b}`);
