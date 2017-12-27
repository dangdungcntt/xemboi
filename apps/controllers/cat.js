'use strict';
let express = require('express');
let request = require('request');
const tieqViet = require('tieqviet');


let Image = require('../models/image');

let router = express.Router();

const ucfirst = str => str.charAt(0).toUpperCase() + str.slice(1);

router.get('/:t', (req, res) => {
  const url = 'http://iwanttodrawacatforyou.com/wp-content/uploads/';
  res.send(`<meta property="og:image" content="${url}${Math.floor(Math.random() * 20000) + 100}.jpg" />`);
});

router.get('/', (req, res) => {
  // console.log(req)
  res.redirect(`/cat/${new Date().getTime()}`, 301);
});

module.exports = router;
