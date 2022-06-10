const path = require('path');
const fs = require('fs');

let chirpPath = path.join(__dirname, '../chirps.json');

fs.readFile(chirpPath,{encoding: "UTF-8"}, (err,data)=>{
    let chirps = JSON.parse(data);
    console.log(chirps);
});