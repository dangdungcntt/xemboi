let cheerio = require('cheerio');

module.exports = (data) => {
  let $ = cheerio.load(data, { decodeEntities: false });
  let table = $('table');
  let tds = table.find('td p');
  let thongTin = $(tds[0]).text();
  let ketLuan = $(tds[1]).text();
  return {
    tieuDe: 'Xét về mệnh',
    noiDung: {
      thongTin,
      ketLuan
    }
  };
};
