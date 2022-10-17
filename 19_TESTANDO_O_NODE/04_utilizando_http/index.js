const {createServer} = require('http');

let server = createServer((request, response) => {
    
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write(`
        <!DOCTYPE html>
        <html lang="pt-br">
            <head>
                <meta charset="utf-8">
                <title>Testando o Node</title>
            </head>
        <body>
            <h1>Olá, mundo!</h1>
            <p>Primeira página com node.js</p>
            <p>${request.url}</p>
            <p>Teste atualização</p>
        </body>
        </html>
    `);
    response.end();
});

server.listen(8000);

console.log('Ouvindo 8000');