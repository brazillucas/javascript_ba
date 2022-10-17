const express = require('express');
let app = express();

app.get('/', (request, response) => {
    response.send('Primeira página com Express');
});

app.get('/teste', (request, response) => {
    response.send('Testando');
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
})