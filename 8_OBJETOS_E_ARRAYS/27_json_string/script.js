const car = {
    "brand": 'Ford',
    "model": 'Mustang',
    "year": 1964
}

let carJSON = JSON.stringify(car);
console.log(carJSON);

let carrobjt = JSON.stringify(car);

console.log(carrobjt);

let carroJSON = JSON.parse(carJSON);

console.log(carroJSON);