'use strict';
let express = require('express');
let request = require('request');
const tieqViet = require('tieqviet');


let Image = require('../models/image');

let router = express.Router();

const ucfirst = str => str.charAt(0).toUpperCase() + str.slice(1);

router.get('/:name', (req, res) => {
  let URL = decodeURIComponent(req.url);
  Image.findOne({
    query: URL,
  })
    .exec((err, image) => {
      if (err || !image) {
        const name = req.params.name.toLowerCase().split('_').map(str => ucfirst(str)).join(' ');
        const nametv = tieqViet(name);
        request.post({ url: process.env.TV_API, form: { data: { name, nametv } } }, (err, ress, body) => {
          // console.log(body);
          // return;
          let result = JSON.parse(body);
          if (result.success) {
            let newDoB = new Image({
              query: URL,
              fileName: result.fileName,
              ext: result.ext,
              time: new Date().getMilliseconds()
            });
            newDoB.save((err) => {
              if (err) {
                return console.log(err);
              }
            });
            res.render('successPage', {
              data: {
                file: 'tv/' + result.fileName + '.' + result.ext
              }
            });
          } else {
            console.log(result.error);
            res.render('errorPage');
          }
        });
        return;
      }
      return res.render('successPage', {
        data: {
          file: 'tv/' + image.fileName + '.' + image.ext
        }
      });
    })
    .then((response) => {

    })
    .catch((err) => {
      res.render('errorPage');
    });
});

router.use('/', (req, res) => {
  res.send('TieqViet home page');
});

module.exports = router;
