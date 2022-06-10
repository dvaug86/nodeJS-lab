const rp = require('request-promise');
const path = require('path');
const fs = require('fs');

rp('https://reddit.com/r/popular.json')
    .then(res => {
        let articles = JSON.parse(res);
        articles.data.children.forEach(eachArt => {
            let ext = path.extname(eachArt.data.url)
            let name = eachArt.data.id;
            let fileName = name + ext;
            let downloadPath = path.join(__dirname, `./downloads/${fileName}`);
            if (ext === '.jpg' || ext === '.gif' || ext === '.png') {
                rp(eachArt.data.url, { encoding: 'base64' })
                    .then(pix => {
                        fs.writeFile(downloadPath, pix, { encoding: 'base64' }, err => {
                            if (err) console.log(err);
                        });

                    });
            };
        }); 
    });