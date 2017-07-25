'use strict';
let express = require('express');
let request = require('request');
let cheerio = require('cheerio');

let Image = require('../models/image');

let getData = require('../helpers/getData');

let router = express.Router();

router.get('/:tentrai.:ngaysinhtrai.:thangsinhtrai.:namsinhtrai-:tengai.:ngaysinhgai.:thangsinhgai.:namsinhgai', (req, res) => {
  Image.findOne({ 
		query: req.url,
	})
		.exec((err, image) => {
			if (err || !image) {
        getData(req.params)
        .then((response) => {
          request.post({url: process.env.TINH_DUYEN_API, form: {data: response.data}}, (err, ress, body) => {
            let result = JSON.parse(body);
            if (result.success) {
              let newImage = new Image({
                query: req.url,
                fileName: result.fileName,
                ext: result.ext,
                time: new Date().getMilliseconds()
              });
              newImage.save((err) => {
                if (err) {
                  return console.log(err);
                }
              });
              res.render('successPage', {
                data: {
                  file: result.fileName + '.' + result.ext
                }
              });
            } else {
              console.log(result.error);
              res.render('errorPage');
            }
          });
        });
        return;
      }
      return res.render('successPage', {
        data: {
          file: image.fileName + '.' + image.ext
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
    res.send('Tinhduyen home page');
});

module.exports = router;
