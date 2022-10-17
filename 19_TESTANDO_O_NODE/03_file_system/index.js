let {readFile, writeFile} = require('fs');

readFile('arquivo.txt', 'utf8', (error, texto) => {
    if (error) {
        throw error;
    } else {
        console.log(texto);
    }
});

writeFile('arquivo.txt', 'Texto escrito pela função WriteFile', (error) => {
    if (error) {
        throw error;
    } else {
        console.log('Arquivo escrito com sucesso!');
    }
});