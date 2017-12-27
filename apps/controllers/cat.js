'use strict';
let express = require('express');
let request = require('request');
const tieqViet = require('tieqviet');


let Image = require('../models/image');

let router = express.Router();

const ucfirst = str => str.charAt(0).toUpperCase() + str.slice(1);

router.get('*', (req, res) => {
  const url = 'http://iwanttodrawacatforyou.com/wp-content/uploads/';
  res.redirect(`${url}${Math.floor(Math.random() * 20000) + 100}.jpg`);
});

module.exports = router;
