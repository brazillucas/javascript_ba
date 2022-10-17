class CarrinhoDeCompras {
    constructor (item, quantidade, valorTotal) {
        this.itens = item;
        this.quantidade = quantidade;
        this.valorTotal = valorTotal;
    }
    addItem (newItem) {
        let contador = 0;

        for(let itemCarrinho in this.itens) {
            if(this.itens[itemCarrinho].id == newItem.id) {
                this.itens[itemCarrinho].quantidade += newItem.quantidade;
                contador = 1;
            }
        }

        if (contador == 0) {
            this.itens.push(newItem);
        }

        this.quantidade += newItem.quantidade;
        this.valorTotal += newItem.preco * newItem.quantidade;
    }
    removeItem (item) {
        let contador = 0;

        for(let itemCarrinho in this.itens) {
            if(this.itens[itemCarrinho].id == item.id) {
                this.itens[itemCarrinho].quantidade -= item.quantidade;
                contador = 1;
            }
        }

        if (contador = 1) {
            this.quantidade -= item.quantidade;
            this.valorTotal -= item.preco * item.quantidade;
        }

        }
}

let compras = new CarrinhoDeCompras('Celular', 2, 1000);

//criar array de objetos
let carrinho = new CarrinhoDeCompras([
    {
        id: 01,
        item: 'Celular',
        quantidade: 2,
        preco: 1000
    },
    {
        id: 02,
        item: 'Notebook',
        quantidade: 1,
        preco: 4000
    }
], 3, 6000);

//Imprime todo o array
console.log(carrinho);

carrinho.addItem({id: 03, item: 'Mouse', quantidade: 2, preco: 200});

console.log(carrinho);

carrinho.addItem({id: 01, item: 'Celular', quantidade: 2, preco: 1000});

console.log(carrinho);

carrinho.removeItem({id: 01, quantidade: 1, preco: 1000});

console.log(carrinho);