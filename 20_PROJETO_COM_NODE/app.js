const express    = require('express');
const app        = express();
const db         = require('./db/connection');
const bodyParser = require('body-parser');

const PORT = 3500;


app.listen(PORT, function() {
    console.log(`O Express está rodando na porta ${PORT}.`)
});

// Body Parser
app.use(bodyParser.urlencoded({ extended: false}));

// DB Connection
db
    .authenticate()
    .then(() => {
        console.log('Conectou ao banco com sucesso.')
    })
    .catch(error => {
        console.error(`Erro ao conectar ao banco:  ${error}`);
    })

// Routes
app.get('/', (req, res) => {
    res.send(`
    <h1>Título</h1>
    <p>'Está funcionando! Pelo visto sim! Será que agr vai?'</p>
    `);
});

const empregos = './routes/empregos';
// Rotas Emnprego
app.use('/empregos', require(empregos));