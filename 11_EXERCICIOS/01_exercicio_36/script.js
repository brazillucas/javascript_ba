class conta {
    constructor(agencia, conta, saldo) {
        this.agencia = agencia;
        this.conta = conta;
        this.saldo = saldo;
    }
    depositar(valor) {
        this.saldo += valor;
    }
    sacar(valor) {
        this.saldo -= valor;
    }
    consultarSaldo() {
        console.log(this.saldo);
    }
}

let conta1 = new conta(1234, 5489, 1000);

conta1.consultarSaldo();
conta1.depositar(500);
conta1.consultarSaldo();
conta1.sacar(200);
conta1.consultarSaldo();