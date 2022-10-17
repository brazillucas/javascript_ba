// Declaração de Variáveis
const question = document.querySelector("#question");
const answersBox = document.querySelector("#answers-box");
const quizzContainer = document.querySelector("#quizz-container");
const scoreContainer = document.querySelector("#score-container");
const letters = ["a", "b", "c", "d"];
let points = 0;
let actualQUestion = 0;

//  Perguntas
const questions = [
        {
          "question": "PHP foi desenvolvido para qual fim?",
          "answers": [
            {
              "answer": "back-end",
              "correct": true
            },
            {
              "answer": "front-end",
              "correct": false
            },
            {
              "answer": "Sistema operacional",
              "correct": false
            },
            {
              "answer": "Banco de dados",
              "correct": false
            },
          ]
        },
        {
          "question": "Uma forma de declarar variável em JavaScript:",
          "answers": [
            {
              "answer": "$var",
              "correct": false
            },
            {
              "answer": "var",
              "correct": true
            },
            {
              "answer": "@var",
              "correct": false
            },
            {
              "answer": "#let",
              "correct": false
            },
          ]
        },
        {
          "question": "Qual o seletor de id no CSS?",
          "answers": [
            {
              "answer": "#",
              "correct": true
            },
            {
              "answer": ".",
              "correct": false
            },
            {
              "answer": "@",
              "correct": false
            },
            {
              "answer": "/",
              "correct": false
            },
          ]
        },
];

// Substituição do quizz para a primeira pergunta
function init() {
    // Cirar primeira pergunta
    console.log("iniciou");
    createQuestion(0);
}

// Cria uma pergunta
function createQuestion(i) {
    // Limpar a questão anterior
    const oldButtons = answersBox.querySelectorAll("button");

    oldButtons.forEach(function(btn) {
        btn.remove();
    });

    // Alterar texto da pergunta
    const questionText = question.querySelector("#question-text");
    const questionNumber = question.querySelector("#question-number");

    questionText.textContent = questions[i].question;
    questionNumber.textContent = i + 1;

    // Inserir alternativas
    questions[i].answers.forEach(function(answer,i) {
        // Cria o template do botão do quizz
        const answerTemplate = document.querySelector(".answer-template").cloneNode(true);

        const letterBtn = answerTemplate.querySelector(".btn-letter");
        const answerText = answerTemplate.querySelector(".question-answer");

        letterBtn.textContent = letters[i];
        answerText.textContent = answer['answer'];

        answerTemplate.setAttribute("correct-answer", answer["correct"]);

        // Remover classe hide e template
        answerTemplate.classList.remove("hide");
        answerTemplate.classList.remove("answer-template");

        // Inserir alternativas na tela
        answersBox.appendChild(answerTemplate);

        // Inserir evento de click no botão
        answerTemplate.addEventListener("click",function(){
            checkAnswer(this);
        })
    })

    // Incrementar o número da questão
    actualQUestion++;
}

// Verificando resposta do usuário
function checkAnswer(btn) {
    
    // Seleciona todos os botões
    const buttons = answersBox.querySelectorAll("button");

    // Verifica cada botão e adiciona as classes correspondentes
    buttons.forEach((button) => {
        if(button.getAttribute("correct-answer") === "true") {
            button.classList.add("correct-answer");
            
            // Checar se o usuário acertou
            if (btn === button) {
                // Incrementa a pontuação
                points++;
            }
        } else {
            button.classList.add("wrong-answer");
        }
    });

    // Exibir próxima pergunta
    nextQuestion();
}

// Exibe a próxima pergunta do quizz
function nextQuestion() {
    
    // Timer para visualizar as respostas
    setTimeout(() => {
        
        // Verifica se ainda há perguntas
        if (actualQUestion >= questions.length) {
            // Apresenta mensagem final
            showSuccessMessage();
        } else {
            createQuestion(actualQUestion);
        }
    }, 1500);
}

// Exibe mensagem de sucesso
function showSuccessMessage() {
   
    hideOrShow();

    // Trocar dados da tela de sucesso


    // Calcular Score
    const score = ((points / questions.length) * 100).toFixed(2);

    const displayScore = document.querySelector("#display-score span");

    displayScore.textContent = score.toString();

    // Alterar o número de perguntas corretas
    const correctAnswers = document.querySelector("#correct-answers");
    
    correctAnswers.textContent = points;

    // Alterar quantidade total de perguntas
    const totalQuestions = document.querySelector("#questions-qty");

    totalQuestions.textContent = questions.length;

}

// Mostra ou esconde o quizz
function hideOrShow() {
   // Troca exibição do quizz
   quizzContainer.classList.toggle("hide");

   // Troca exibição da pontuação
   scoreContainer.classList.toggle("hide");
}

// Reiniciar Quizz
const restartBtn = document.querySelector("#restart-btn")

restartBtn.addEventListener("click", () => {
  
  // Zerar o jogo
  actualQUestion = 0;
  points = 0;
  hideOrShow();
  init();
});

// Iniciando o quizz
init();