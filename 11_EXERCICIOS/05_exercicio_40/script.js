// Crie uma classe conta bancaria;
// Com as propriedades de saldo na conta corrente, saldo na conta poupança e juros da poupança;
// Crie os métodos de depósito e saque, também um método para transferir dinheiro da poupança para a corrente;
// Além disso crie uma conta especial que herda da conta normal;
// Na conta especial os juros são dobrados da conta normal;

class Conta {
    constructor(numConta, saldoCC, saldoCP, juros) {
        this.numConta = numConta;
        this.saldoCC = saldoCC;
        this.saldoCP = saldoCP;
        this.juros = juros;
    }
    sacar( conta, tipo, valor) {
        if (tipo == 1) {
            this.sacarCP(conta, valor);
            return true;
        }
        if (tipo == 2) {
            this.sacarCC(conta, valor);
            return true;
        }
        tipo <= 0 || tipo > 2 ? console.log(`Conta ${conta} não encontrada!`) : console.log(`Conta ${conta} não encontrada!`);
        return false;
    }
    sacarCP( conta, valor) {
        if (this.saldoCP >= valor) {
            this.saldoCP -= valor;
            console.log(`Saque de R$${valor} da conta ${conta} realizado com sucesso!`);
            return true;
        } else {
            console.log(`Saldo insuficiente na conta ${conta}!`);
            return false;
        }
    }
    sacarCC(conta, valor) {
        if (this.saldoCC >= valor) {
            this.saldoCC -= valor;
            console.log(`Saque de R$${valor} da conta ${conta} realizado com sucesso!`);
            return true;
        } else {
            console.log(`Saldo insuficiente na conta ${conta}!`);
            return false;
        }
    }
    depositar(conta, tipo, valor) {
        //tipo 1 = conta pouança
        //tipo 2 = conta corrente
        if (tipo == 1) {
            this.saldoCP += valor;
            console.log(`Depósito de R$${valor} na conta ${conta} realizado com sucesso!`);
            return true;
        }
        if (tipo == 2) {
            this.saldoCC += valor;
            console.log(`Depósito de R$${valor} na conta ${conta} realizado com sucesso!`);
            return true;
        }
        tipo <= 0 || tipo > 2 ? console.log(`Conta ${conta} não encontrada!`) : console.log(`Conta ${conta} não encontrada!`);
    }
    transferir(contaOrigem, contaDestino, tipoContaOrigem, tipoContaDestino, valor) {
        //tipo 1 = conta pouança
        //tipo 2 = conta corrente
        if(tipoContaOrigem == 1){
            if(this.saldoCP >= valor){
                this.saldoCP -= valor;
                this.depositar(contaDestino, tipoContaDestino, valor);
                console.log(`Transferência de R$${valor} da conta ${contaOrigem} para a conta ${contaDestino} realizada com sucesso!`);
                return true;
            }
            else{
                console.log(`Saldo insuficiente na conta ${contaOrigem}!`);
                return false;
            }
        }
        if(tipoContaOrigem == 2){
            if(this.saldoCC >= valor){
                this.saldoCC -= valor;
                this.depositar(contaDestino, tipoContaDestino, valor);
                console.log(`Transferência de R$${valor} da conta ${contaOrigem} para a conta ${contaDestino} realizada com sucesso!`);
                return true;
            }
            else{
                console.log(`Saldo insuficiente na conta ${contaOrigem}!`);
                return false;
            }
        }
        console.log(`Conta ${contaOrigem} não encontrada!`);
        return false;
        
    }

}

class ContaEspecial extends Conta {
    constructor (numConta, saldoCC, saldoCP, juros) {
        super(numConta, saldoCC, saldoCP, juros * 2);
    }
}

let conta1 = new Conta(1, 1000, 1000, 0.01);
let conta2 = new Conta(2, 1000, 1000, 0.01);
let conta3 = new ContaEspecial(3, 1000, 1000, 0.01);

conta1.depositar(1, 1, 100);
conta1.depositar(1, 2, 2);
console.log('Primeiro saque da conta 1:');
conta1.sacar(1, 1, 100);
console.log('Segundo saque da conta 2:');
conta2.sacar(2, 1, 100);
conta1.sacar(1, 2, 100);
conta1.sacar(2, 2, 100);
conta1.transferir(1, 2, 1, 2, 100);
conta1.transferir(1, 3, 1, 2, 100);
conta1.transferir(2, 1, 2, 1, 100);
conta1.transferir(2, 3, 2, 1, 100);
conta1.transferir(3, 1, 2, 1, 100);
conta1.transferir(3, 2, 2, 1, 100);
conta1.transferir(1, 3, 1, 2, 100);
conta1.transferir(2, 1, 2, 1, 100);
conta1.transferir(3, 2, 2, 1, 100);

let contas = [conta1, conta2, conta3];