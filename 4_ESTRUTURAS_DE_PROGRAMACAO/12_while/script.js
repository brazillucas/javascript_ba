let num = 10;
let arraynum = [];

while (num > 0) {
  arraynum.push(num);
  num--;
}

num = 10;
console.log(arraynum);

while (num > 0) {
  num = Math.floor(Math.random() * (num * 2));
  num--;
  console.log(num);
}