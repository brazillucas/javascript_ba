function verificarNumero(num) {
    return new Promise((resolve, reject) => {
        if(num == 2) {
            resolve (console.log(`O número é ${num}`));
        } else {
            reject(new Error('É, meu bacano, hoje tá difícil'));
        }
    });
}

verificarNumero(1);
verificarNumero(2);
verificarNumero(3);