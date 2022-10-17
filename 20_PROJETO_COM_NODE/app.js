const express    = require('express');
const exphbs     = require("express-handlebars");
const handlebars = require('handlebars');
// const { engine } = require('express-handlebars');
const app        = express();
const path       = require('path');
const db         = require('./db/connection');
const bodyParser = require('body-parser');
const Emprego    = require('./models/Emprego');
const Sequelize  = require('sequelize');
const Op         = Sequelize.Op;


const PORT = 3000;


app.listen(PORT, function() {
    console.log(`O Express está rodando na porta ${PORT}.`)
});

// Body Parser
app.use(bodyParser.urlencoded({ extended: false}));

// Handle bars
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs.engine({extname: '.handlebars', defaultLayout: 'main'}));
// app.engine('handlebars', engine({ extname: '.handlebars', defaultLayout: "main"}));
app.set('view engine', 'handlebars');

// Pasta Static
app.use(express.static(path.join(__dirname, 'public')));

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

    let search = req.query.job;
    let query = '%'+search+'%';

    if (!search) {
        Emprego.findAll({order: [
            ['createdAt', 'DESC']
        ]})
        .then(empregos => {
            res.render('index', {
                empregos
            });
        })
        .catch(error => { console.log(error) });
    } else {
        Emprego.findAll({
            where: {titulo: {[Op.like]: query}},
            order: [
            ['createdAt', 'DESC']
        ]})
        .then(empregos => {
            res.render('index', {
                empregos, search
            });
        })
        .catch(error => { console.log(error) });
    }
});

const empregos = './routes/empregos';
// Rotas Emnprego
app.use('/empregos', require(empregos));

// TESTES PARA SEREM APAGADOS
const relogio = './routes/relogio';
// Rotas Teste
app.use('/relogio', require(relogio));