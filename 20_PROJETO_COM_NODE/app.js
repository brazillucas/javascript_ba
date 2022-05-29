const express = require('express');
const app = express();
const db = require('./db/connection');

const PORT = 3000;


app.listen(PORT, function() {
    console.log(`O Express está rodando na porta ${PORT}.`)
});

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