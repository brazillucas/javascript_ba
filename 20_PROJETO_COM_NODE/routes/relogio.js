const express   = require('express');
const router    = express.Router();
const Emprego   = require('../models/Emprego');

// Teste
router.get('/', (req, res) => {
    res.render('relogio');
});



module.exports = router