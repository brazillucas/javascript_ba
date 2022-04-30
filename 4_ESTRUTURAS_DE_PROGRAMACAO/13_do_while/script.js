let num = 10;
let arraynum = [];

do {
  arraynum.push(num);
  num--;
} while(num > 0);

console.log(arraynum.join(", "));