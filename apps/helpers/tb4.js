let cheerio = require('cheerio');

module.exports = (data) => {
  let $ = cheerio.load(data, { decodeEntities: false });
  let table = $('table');
  let tds = table.find('td p');
  let thongTin = $(tds[0]).text().split('\n\t\t\t\t');
  let yNghia = $(tds[1]).text();
  let ketLuanQue = $(tds[2]).text().trim();
  let ketLuan = $(tds[4]).text();
  return {
    tieuDe: 'Xét về Quẻ dịch',
    noiDung: {
      thongTin,
      yNghia,
      ketLuanQue,
      ketLuan
    }
  };
};
