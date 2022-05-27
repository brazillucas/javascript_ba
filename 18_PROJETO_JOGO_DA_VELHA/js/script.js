// Declarando variáveis globais
let x = document.querySelector('.x');
let o = document.querySelector('.o');
let boxes = document.querySelectorAll('.box');
let buttons = document.querySelectorAll('#buttons-container button');
let reset = document.querySelector('#reset');
let containerMensagem = document.querySelector('#mensagem');
let mensagem = document.querySelector('#mensagem p');
let segundoJogador;

// Contador de Jogadas
let jogador1 = 0;
let jogador2 = 0;

// Adicionando evendo de click aos boxes
for (let i = 0; i < boxes.length; i++) {

    // quando clicar na caixa
    boxes[i].addEventListener('click', function () {

        let el = verificaJogador();

        // Verifica se já está preenchida
        if (this.childNodes.length == 0) {
            let cloneEl = el.cloneNode(true);

            //adicionando o elemento clonado ao box
            this.appendChild(cloneEl);

            // Computa jogada
            if (jogador1 == jogador2) {
                jogador1++;
                if (segundoJogador == 'iaJogador') {
                    // Chama jogada do ia
                    jogadaPC();
                    jogador2++;
                }
            } else {
                jogador2++;
            }
        }

        // Checar vencedor
        checarVencedor();
    })
}

reset.addEventListener('click', function() {
    jogador1 = 0;
    jogador2 = 0;
    
    limparBoxes();
    for (let j = 0; j < buttons.length; j++) {
       buttons[j].classList.remove('hide');
    }
    
    let resetPlacarX = document.querySelector('#placar1');
    let resetPlacarO = document.querySelector('#placar2');

    resetPlacarX.textContent = 0;
    resetPlacarO.textContent = 0;

    container.classList.add('hide');
    reset.classList.add('hide');
})

function verificaJogador () {            
    if (jogador1 == jogador2) {
        // x
        return x;
    } else {
        // o
        return o;
    }
}

// Evento saber se são 2 jogadores ou IA
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
        segundoJogador = this.getAttribute('id');

        for (let j = 0; j < buttons.length; j++) {
            buttons[j].classList.add('hide');
        }

        setTimeout(function() {
            let container = document.querySelector('#container');
            container.classList.remove('hide');
            reset.classList.remove('hide');
        }, 300);
    })
}

// Checar vencedor
function checarVencedor() {
    let b1 = document.getElementById('bloco-1');
    let b2 = document.getElementById('bloco-2');
    let b3 = document.getElementById('bloco-3');
    let b4 = document.getElementById('bloco-4');
    let b5 = document.getElementById('bloco-5');
    let b6 = document.getElementById('bloco-6');
    let b7 = document.getElementById('bloco-7');
    let b8 = document.getElementById('bloco-8');
    let b9 = document.getElementById('bloco-9');

    // Checar se foi preenchido horizontalmente
    if (b1.childNodes.length > 0 && b2.childNodes.length > 0 && b3.childNodes.length > 0) {
        let b1child = b1.childNodes[0].className;
        let b2child = b2.childNodes[0].className;
        let b3child = b3.childNodes[0].className;

        if (b1child == 'x' && b2child == 'x' && b3child == 'x') {
            declaraVencedor('x');
        } else if(b1child == 'o' && b2child == 'o' && b3child == 'o') {
            declaraVencedor('o');           
        }
    }

    if (b4.childNodes.length > 0 && b5.childNodes.length > 0 && b6.childNodes.length > 0) {
        let b4child = b4.childNodes[0].className;
        let b5child = b5.childNodes[0].className;
        let b6child = b6.childNodes[0].className;

        if (b4child == 'x' && b5child == 'x' && b6child == 'x') {
            declaraVencedor('x');
        } else if(b4child == 'o' && b5child == 'o' && b6child == 'o') {
            declaraVencedor('o');           
        }
    }

    if (b7.childNodes.length > 0 && b8.childNodes.length > 0 && b9.childNodes.length > 0) {
        let b7child = b7.childNodes[0].className;
        let b8child = b8.childNodes[0].className;
        let b9child = b9.childNodes[0].className;

        if (b7child == 'x' && b8child == 'x' && b9child == 'x') {
            declaraVencedor('x');
        } else if(b7child == 'o' && b8child == 'o' && b9child == 'o') {
            declaraVencedor('o');           
        }
    }

    //Checar se foi preeenchido na vertical 
    if (b1.childNodes.length > 0 && b4.childNodes.length > 0 && b7.childNodes.length > 0) {
        let b1child = b1.childNodes[0].className;
        let b4child = b4.childNodes[0].className;
        let b7child = b7.childNodes[0].className;

        if(b1child == 'x' && b4child == 'x' && b7child == 'x') {
            declaraVencedor('x');
        } else if (b1child == 'o' && b4child == 'o' && b7child == 'o') {            
            declaraVencedor('o');
        }
    }    

    if (b2.childNodes.length > 0 && b5.childNodes.length > 0 && b8.childNodes.length > 0) {
        let b2child = b2.childNodes[0].className;
        let b5child = b5.childNodes[0].className;
        let b8child = b8.childNodes[0].className;

        if(b2child == 'x' && b5child == 'x' && b8child == 'x') {
            declaraVencedor('x');
        } else if (b2child == 'o' && b5child == 'o' && b8child == 'o') {            
            declaraVencedor('o');
        }
    }    

    if (b3.childNodes.length > 0 && b6.childNodes.length > 0 && b9.childNodes.length > 0) {
        let b3child = b3.childNodes[0].className;
        let b6child = b6.childNodes[0].className;
        let b9child = b9.childNodes[0].className;

        if(b3child == 'x' && b6child == 'x' && b9child == 'x') {
            declaraVencedor('x');
        } else if (b3child == 'o' && b6child == 'o' && b9child == 'o') {            
            declaraVencedor('o');
        }
    }

    //Checar se foi preenchido na diagonal
    if (b1.childNodes.length > 0 && b5.childNodes.length > 0 && b9.childNodes.length > 0) {
        let b1child = b1.childNodes[0].className;
        let b5child = b5.childNodes[0].className;
        let b9child = b9.childNodes[0].className;

        if(b1child == 'x' && b5child == 'x' && b9child == 'x') {
            declaraVencedor('x');
        } else if (b1child == 'o' && b5child == 'o' && b9child == 'o') {            
            declaraVencedor('o');
        }
    }

    if (b3.childNodes.length > 0 && b5.childNodes.length > 0 && b7.childNodes.length > 0) {
        let b3child = b3.childNodes[0].className;
        let b5child = b5.childNodes[0].className;
        let b7child = b7.childNodes[0].className;

        if(b3child == 'x' && b5child == 'x' && b7child == 'x') {
            declaraVencedor('x');
        } else if (b3child == 'o' && b5child == 'o' && b7child == 'o') {            
            declaraVencedor('o');
        }
    }

    //Checar se houve empate
    let contador = 0;
    for (let i = 0; i < boxes.length; i++) {
        if (boxes[i].childNodes[0] != undefined) {
            contador++;
        }
    }

    console.log(contador);

    if (contador == 9) {
        declaraVencedor('deu velha');
    }
}

function declaraVencedor(vencedor) {

    let placarX = document.querySelector('#placar1');
    let placarO = document.querySelector('#placar2');
    let msg = '';

    if (vencedor == 'x') {
        placarX.textContent = parseInt(placarX.textContent) + 1;
        msg = 'Jogador 1 venceu!';
    } else if (vencedor == 'o') {
        placarO.textContent = parseInt(placarO.textContent) + 1; 
        msg = 'Jogador 2 venceu!';
    } else {
        msg = 'Deu velha!';
    }

    // Exibe mensagem
    mensagem.innerHTML = msg;
    containerMensagem.classList.remove('hide');

    // Esconde msg
    setTimeout(function() {
        containerMensagem.classList.add('hide');
    }, 3000);

    // Zerar jogadas
    jogador1 = 0;
    jogador2 = 0;
    
    // Limpa as boxes
    limparBoxes(); 
}

function limparBoxes() {
    let boxesRemover = document.querySelectorAll('.box div');
    
    for (let i = 0; i < boxesRemover.length; i++) {
        boxesRemover[i].parentNode.removeChild(boxesRemover[i]);
    }
}


// Executar lógica da jogada do ia
function jogadaPC() {

    let cloneO = o.cloneNode(true);

    let contador = 0;
    let preenchido = 0;

    for (let i = 0; i < boxes.length; i++) {
        
        let numAleatorio = Math.floor(Math.random() * 5);

        //só preenche se se estiver vazio
        if (boxes[i].childNodes[0] == undefined) {
            if (numAleatorio <= 1) {
                boxes[i].appendChild(cloneO);
                contador ++;
                break;
            }
        //  Chega quantos boxes estão preenchidos
        } else {
            preenchido++;
        }
    }

    if (contador == 0 && preenchido < 9) {
        jogadaPC();
    }
}