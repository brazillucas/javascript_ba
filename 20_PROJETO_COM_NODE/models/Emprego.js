const Sequelize = require('sequelize');
const db = require('../db/connection');

const Emprego  = db.define('emprego', {
    titulo: {
        type: Sequelize.STRING
    },
    descricao: {
        type: Sequelize.STRING,
    },
    salario: {
        type: Sequelize.STRING,
    },
    companhia: {
        type: Sequelize.STRING,
    },
    email: {
        type: Sequelize.STRING,
    },
    novo: {
        type: Sequelize.INTEGER,
    }
});

module.exports = Emprego