let rp = require("request-promise");
let path = require('path');
let fs = require('fs');

let redditPopPath = path.join(__dirname, './popular-articles.json');

let artArray = [];

rp('https://reddit.com/r/popular.json')
    .then (res =>{
        let articles = JSON.parse(res);
        articles.data.children.forEach(each =>{
            artArray.push({
                "title": each.data.title,
                "URL": each.data.url,
                "Author": each.data.author
            })
            fs.writeFile(redditPopPath,JSON.stringify(artArray), err =>{
                console.log(err)
            });
        });
    });

