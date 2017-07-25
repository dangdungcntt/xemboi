let fs = require('fs');
let cheerio = require('cheerio');

fs.readFile('data1.txt', 'utf-8', (err, data) => {
    let $ = cheerio.load(data, { decodeEntities: false });
    // let div = $('.content_xemboi:nth-child(1)');
    let table = $('table');
    let tds = table.find('td');
    // console.log(tds.length);
    // tds.each((index, e) => {
    //     let text = $(e).text().trim().replace('- H', 'H');
    //     let arr = text.split('  - ');
    //     arr.forEach((e) => {
    //         // e = e.replace(/(?:\r\n|\r|\n)/g, ' ');
    //         console.log('--' + e.trim() + '--');
    //     });
    // });
    $('table').remove();
    let html = $('body').html();
    let array = html.split('<br>');
    let _1NguHanh = [array[1], array[2].replace('trại', 'trai'), array[3]].map((e) => {
        return cheerio.load(e, { decodeEntities: false }).text();
    });
    let _2CungMenh = [array[4], array[5], array[6]].map((e) => {
        return cheerio.load(e, { decodeEntities: false }).text();
    });
    let _3QueDich = [array[7], array[8], array[9], array[10], array[12], array[14], array[22]].map((e) => {
        return cheerio.load(e, { decodeEntities: false }).text();
    });
    let _4CanChi = [array[23], array[24], array[25], array[26]].map((e) => {
        return cheerio.load(e, { decodeEntities: false }).text();
    });
    let _5HoTen = [array[27], array[28], array[29], array[30], array[31], array[32], array[33]].map((e) => {
        return cheerio.load(e, { decodeEntities: false }).text();
    });
    let _TongKet = [array[34], array[35].replace('vung', 'vun')].map((e) => {
        return cheerio.load(e, { decodeEntities: false }).text();
    });
    console.log(JSON.stringify(_TongKet)); 
    // console.log($.text());
})