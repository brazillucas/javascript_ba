let pc = {
    marca: 'Asus',
    modelo: 'ROG',
    ano: 2020,
    preco: 2999.99,
    descricao: 'Notebook',
    detalhes: function() {
        return `${this.marca} ${this.modelo} ${this.ano} ${this.preco} ${this.descricao}`;
    }
}

let novoPC = Object.create(pc);

console.log(novoPC.detalhes());

console.log(novoPC.hasOwnProperty('marca'));

novoPC.marca = 'Lenovo';
novoPC.modelo = 'Thinkpad';
novoPC.ano = 2019;
novoPC.preco = 1999.99;
novoPC.descricao = 'Notebook';

console.log(novoPC.detalhes());

//Depois de setada uma nova marca o hasOwnProperty retorna true
//Pois o novo objeto agora tem uma propriedade marca dentro dele
console.log(novoPC.hasOwnProperty('marca'));

//Depois de setada uma marca no novo objeto, o objeto original não muda.
//Por isso, o objeto original continua com a marca original.
console.log(pc.detalhes());

//Conferindo que o novo objeto é um objeto filho do objeto original
console.log(Object.getPrototypeOf(novoPC))