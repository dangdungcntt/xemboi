let cheerio = require('cheerio');

module.exports = (data) => {
  let $ = cheerio.load(data, { decodeEntities: false });
  let table = $('table');
  let tds = table.find('td');
  let arrTTNam = $(tds[2]).html().split('<br>').map((e) => {
    return cheerio.load(e).text().trim();
  });
  let arrTTNu = $(tds[3]).html().split('<br>').map((e) => {
    return cheerio.load(e).text().trim();
  });
  return {
    nam: arrTTNam,
    nu: arrTTNu
  };
};
