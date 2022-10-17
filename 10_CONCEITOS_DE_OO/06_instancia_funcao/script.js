function criarPC(marca, modelo, memoria, hd, preco) {
    //Cria um objeto vazio
    let pc = Object.create({});
    //Define as propriedades do objeto
    pc.marca = marca;
    pc.modelo = modelo;
    pc.memoria = memoria;
    pc.hd = hd;
    pc.preco = preco;
    //Retorna o objeto
    return pc;
}

//Cria um objeto com a função 'criarPC'
let lenovo = criarPC('Lenovo', 'Thinkpad', '8GB', '1TB', '2999,99');

console.log(lenovo);