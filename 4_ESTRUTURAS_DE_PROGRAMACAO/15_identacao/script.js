let num = 10;
let arraynum = [];

for (let i = 0; i < num; i++) {
  if (i % 2 === 0) {
    arraynum.push(i);
  } else {
    arraynum.push(i * 2);
  }
}

console.log(arraynum.join(", "));