class Endereco {
    constructor(rua, bairro, cidade, estado) {
        this.rua = rua;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;        
    }
    /**
     * @param {(arg0: string) => void} rua
     */
    set novaRua(rua) {
        this.rua = rua;
    }
    /**
     * @param {(arg0: string) => void} bairro
     */
    set novoBairro(bairro) {
        this.bairro = bairro;
    }
    /**
     * @param {(arg0: string) => void} cidade
     */
    set novaCidade(cidade) {
        this.cidade = cidade;
    }
    /**
     * @param {(arg0: string) => void} estado
     */
    set novoEstado(estado) {
        this.estado = estado;
    }
}

let meuEndereco = new Endereco("Rua dos Bobos", "Centro", "São Paulo", "SP");

console.log(meuEndereco);

meuEndereco.novaRua = "Rua da Moka";
meuEndereco.novoBairro = "Bairro do Café";
meuEndereco.novaCidade = "Cafezal do Lobo";
meuEndereco.novoEstado = "MG";

console.log(meuEndereco);