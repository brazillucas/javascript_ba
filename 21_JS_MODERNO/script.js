//  1 - var, let e const
var x = 10;
var y = 15;

if (x === 10) {
  var x = 4;

  console.log(x);
  console.log(y);
}

console.log(x);
console.log(typeof x);

let a = 10;
let b = 15;

if (b > 10) {
    let a = 5;
    console.log(a);
}

console.log(a);

for (let i = 0; i < 5; i++) {
    console.log(i);
}

alfa = 100;

console.log(alfa);

console.log(typeof alfa);

function logName() {
    const name = 'Luiz';
    console.log(name);
}

const name = 'Pedro';

logName();

console.log(name);


// console.log(sum);
const sum = function sum(a, b) {
    return a + b;
};

const arrowSum = (a, b) => a + b;

console.log(sum(5, 5));
console.log(arrowSum(5, 2));

const greeting = (name) => {
    if (name) {
        return 'Olá ' + name;
    } else {
        return 'Olá!';
    }
};

console.log(greeting('Android'));
console.log(greeting());

const testeArrow = () => console.log('Teste');

testeArrow();

const user = {
    name: "Lucas",
    sayUserName() {
        var self = this;
        setTimeout(function () {
            console.log(this);
            console.log('Username: ' + self.name);
        }, 500);
    },
    sayUserNameArrow() {
        setTimeout(() => {
            // console.log(this);
            console.log('Username: ' + this.name);
        }, 700);
    }
}

// user.sayUserName();
// user.sayUserNameArrow();

// 3 - Filter
const arr = [1, 3, 4, 5, 8, 9];

const highNumber = arr.filter((n) => {
    if(n >= 5){
        return n;
    }
});

console.log(arr);
console.log(highNumber);

const users = [
    {name: "Lucas", available: false},
    {name: "Matheus", available: true},
    {name: "Flávia", available: false},
    {name: "Daniela", available: true}
];

const availableUser = users.filter((user) => user.available);
const notAvailableUser = users.filter((user) => !user.available);

console.log(availableUser);
console.log(notAvailableUser);

// 4 - Map
const products = [
    {
        name:       'Camisa',
        price:      10.99,
        category:   'Roupas'
    },
    {
        name:       'Chaleira Elétrica',
        price:      49.99,
        category:   'Eletro'
    },
    {
        name:       'Fogão',
        price:      400,
        category:   'Eletro'
    },
    {
        name:       'Calça Jeans',
        price:      50.99,
        category:   'Roupas'
    }
]

products.map((product) => {
    if(product.category === 'Roupas') {
        product.onSale = true;
    }
})

console.log(products);

// 5 - Template Literals
const userName = 'Lucas';
const age = 30;

console.log(`Teste`);
console.log(`O nome do usuário é ${userName} e ele tem ${age} anos`)
console.log('O nome do usuário é ' + userName + ' e ele tem ' + age + ' anos')

// 6 - Destructuring
const fruits = ['Banana', 'Uva', 'Morango'];

const [fruit1, fruit2, fruit3] = fruits;

console.log(fruit1);
console.log(fruit2);
console.log(fruit3);

const productDetails = {
    name: "Mouse",
    price: 39.99,
    category: "Periféricos",
    color: "Preto",
}

const {
    name : productName,
    price: productPrice,
    category: productCategory,
    color,
} = productDetails;

console.log(productName);
console.log(productPrice);
console.log(productCategory);
console.log(color);

// 7 - Spread Operator
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const newNumbers = [...numbers, 10, 11, 12];

console.log(newNumbers);

const a1 = [1, 2, 3];
const a2 = [...a1, 4, 5, 6];

console.log(a2);

const a4 = [0, ...a2, ...a1];

console.log(a4);

const carName ={name : 'Fusca'};
const carBrand = {brand: 'Volkswagen'};
const carColor = {color: 'Preto'};
const otherInfos = {year: 1969, available: true};

const car = {...carName, ...carBrand, ...carColor, ...otherInfos};

// 8 - Classes
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    productWithDiscount(discount) {
        return this.price * ((100 - discount) / 100);
    }
}

const shirt = new Product('Camisa Rola V', 49.99);

console.log(shirt.price);

console.log(shirt.productWithDiscount (10));

console.log(shirt.productWithDiscount(50));

const tenis = new Product('Tênis verde', 120);

console.log(tenis.productWithDiscount(10));

// 9 - Herança
class ProductWithAttributes extends Product {
    constructor(name, price, colors) {
        super(name, price);
        this.colors = colors;
    }

    showColors() {
        console.log("As cores disponíveis são: ");
        this.colors.forEach((color) => {
            console.log(color);
        });
    }
}

const hat = new ProductWithAttributes("Chapéu", 29.99, ["Preto", "Azul", "Verde"]);

console.log(hat.name);

console.log(hat.price);

console.log(hat.productWithDiscount(10));

hat.showColors();