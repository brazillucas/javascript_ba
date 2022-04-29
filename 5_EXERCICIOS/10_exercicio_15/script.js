let numPriomos = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];


for (let i = 0; i < numPriomos.length; i++) {
    // Create an "li" node:
    const node = document.createElement("li");

    // Create a text node:
    const textnode = document.createTextNode(numPriomos[i]);

    // Append the text node to the "li" node:
    node.appendChild(textnode);

    // Append the "li" node to the list:
    document.getElementById("myList").appendChild(node);
}

let num = Math.floor(Math.random() * 100);
let primo;
for (let i = 0; i < 10; i++) {
    if (num % i === 0 && i !== 1 && i !== num) {
        console.log(`${num} não é primo`);
        primo = false;
        break;
    } else {
        primo = true;
    }
}

primo ? console.log(`${num} é primo`) : primo;