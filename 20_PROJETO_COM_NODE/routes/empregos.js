const express   = require('express');
const router    = express.Router();
const Emprego   = require('../models/Emprego');

// Teste
router.get('/teste', (req, res) => {
    res.send('Deu certo!');
});

// Detalhes do Emprego
router.get('/view/:id', (req, res) => {
    Emprego.findOne({
        where: {id: req.params.id}
    })
    .then(empregos => {
        res.render('view', {
            empregos
        })
    })
    .catch(error => { console.log(error) });
})

// Buscando todos os emprego via Get
router.get('/add', (req, res) => {
    res.render('add');
})

// Adicionar Emprego via Post
router.post('/add', (req, res) => {
    
    let {titulo, descricao, salario, companhia, email, novo} = req.body;

    // Inserir
    Emprego.create({
        titulo,
        descricao,
        salario,
        companhia,
        email,
        novo
    })
    .then(() => {
        res.redirect('/');
    })
    .catch(error => {
        console.log(error);
    });
});


module.exports = router