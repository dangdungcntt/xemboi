'use strict';
let express = require('express');
let request = require('request');
let cheerio = require('cheerio');

let Image = require('../models/image');

let getData = require('../helpers/getData');

let router = express.Router();

router.get('/:day.:month.:year', (req, res) => {
  let URL = decodeURIComponent(req.url);
  Image.findOne({ 
		query: URL,
	})
		.exec((err, image) => {
			if (err || !image) {
          request.post({url: process.env.GHEP_CAU_API, form: {data: req.params}}, (err, ress, body) => {
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
                  file: 'ghepcau/' + result.fileName + '.' + result.ext
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
          file: 'ghepcau/' + image.fileName + '.' + image.ext
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
    res.send('Ghepcau home page');
});

module.exports = router;
