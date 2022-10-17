let numero = 5;

while(numero < 50) {
  numero += 5;
  console.log(numero);
}

for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    continue;
  }
  console.log(i);
}

for (let i = 10; i > 0; i--) {
  if (i % 2 > 0) {
    continue;
  }
  console.log(i);
}