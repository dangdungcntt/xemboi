'use strict';
let fs = require('fs');
let express = require('express');
let request = require('request');
let cheerio = require('cheerio');
let router = express.Router();

router.get('/:tentrai.:ngaysinhtrai.:thangsinhtrai.:namsinhtrai-:tengai.:ngaysinhgai.:thangsinhgai.:namsinhgai', (req, res) => {
  // const {
  //     tentrai, ngaysinhtrai, thangsinhtrai, namsinhtrai,
  //     tengai, ngaysinhgai, thangsinhgai, namsinhgai
  // } = req.params;
  req.params.option = 'com_boi';
  req.params.view = 'tinhyeu';
  req.params.Itemid = 29;
  req.params.task = 'show';
  // request
  //   .post('http://phongthuyso.vn/boi-tinh-yeu.html')
  //   .form()
  //   .then((err, response, body) => {
  //     res.send(body);
  //   })
  //   .catch(err => console.log(err));
  request.post({
    url: 'http://phongthuyso.vn/boi-tinh-yeu.html',
    form: req.params
  }, function(error, response, body){
    if (error) res.render('default');
    let $ = cheerio.load(body, { decodeEntities: false });
    let div = $('.content_xemboi:nth-child(1)');
    fs.writeFile('data1.txt', div.html(), (err) => console.log(err));
    // let text1 = div.find('table').text();
    //   console.log(div.html());
      
    // // });
    res.send('123');
  });
});

router.use('/', (req, res) => {
    res.send('Tinhduyen home page');
});

module.exports = router;