let request = require('request');
let cheerio = require('cheerio');

let TB1 = require('./tb1');
let TB2 = require('./tb2');
let TB3 = require('./tb3');
let TB4 = require('./tb4');
let TB5 = require('./tb5');
let TB6 = require('./tb6');

module.exports = (params) => {
  return new Promise((resolve, reject) => {
    const {
      tentrai, ngaysinhtrai, thangsinhtrai, namsinhtrai,
      tengai, ngaysinhgai, thangsinhgai, namsinhgai
    } = params;
    let query = `${tentrai}-sinh-gio-ty-${ngaysinhtrai}-${thangsinhtrai}-${namsinhtrai}`;
    query += `-va-${tengai}-sinh-gio-ty-${ngaysinhgai}-${thangsinhgai}-${namsinhgai}/`;
    request(`https://www.tuvikhoahoc.com/xem-boi-tinh-duyen/${query}`, 
      (error, response, body) => {
        if (error) return reject(error);
        let $ = cheerio.load(body, { decodeEntities: false });
        let div = $('.table-hover');
        let tb1 = TB1(cheerio.load(div[0], { decodeEntities: false }).html());
        let tb2 = TB2(cheerio.load(div[1], { decodeEntities: false }).html());
        let tb3 = TB3(cheerio.load(div[2], { decodeEntities: false }).html());
        let tb4 = TB4(cheerio.load(div[3], { decodeEntities: false }).html());
        let tb5 = TB5(cheerio.load(div[4], { decodeEntities: false }).html());
        let tb6 = TB6(cheerio.load(div[5], { decodeEntities: false }).html());
        let ketQua = {
          canChi: $('.score_sim .score-sim-head').text().replace('Kết quả bói tình yêu ', ''),
          diem: $('.score_sim .score').text(),
          luan: $('.score_sim .result').text()
        }
        return resolve({
          data: { tb1, tb2, tb3, tb4, tb5, tb6, ketQua }
        });
      }
    );
  });
  
};
