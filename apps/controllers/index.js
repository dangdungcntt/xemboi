'use strict';
let express = require('express');
let router = express.Router();

router.use('/tinhduyen', require('./tinhduyen.js'));
router.use('/', (req, res) => {
    res.render('home');
});

module.exports = router;