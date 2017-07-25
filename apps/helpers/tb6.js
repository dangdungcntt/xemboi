let cheerio = require('cheerio');

module.exports = (data) => {
  let $ = cheerio.load(data, { decodeEntities: false });
  let table = $('table');
  let tds = table.find('td p');
  let thongTin = $(tds[0]).text();
  let baiVinh = $(tds[1]).html().split('<br>').map((e) => {
    e = e.replace('<i>', '');
    return e.replace('</i>', '').trim();
  });
  let ketLuan = $(tds[2]).text();
  return {
    tieuDe: 'Xét về Họ tên',
    noiDung: {
      thongTin,
      baiVinh,
      ketLuan
    }
  };
};
