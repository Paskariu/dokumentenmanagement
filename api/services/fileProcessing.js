const db = require('./db')
const fs = require('fs');
const path = require('path');


async function processfile(req, res, file, timestamp) {
    let filename = (path.resolve('./uploads/' + timestamp + '-' + file.name)).replaceAll(path.sep, "/");
    let filename2 = 'C:\\Users\\jhe\\source\\uni-repos\\Dokumentenmanagement\\api\\uploads\\' + timestamp + '-test.txt';
    console.log(filename);
    console.log(filename2);
    console.log(path.resolve(filename) == path.resolve(filename2));
    try {
        console.log(readFile(filename2));
        //console.log(readFile(filename));
        //console.log(await db.query(`INSERT INTO files (timestamp, name, content) VALUES (${Date.now()}, \'${filename}\', \'${readFile(filename2)}\');`));
    } catch (err) {
        console.log("Couldn´t read file: " + filename + "\n" + err);
    }
}

function readFile(fn) {
    return fs.readFileSync(fn, 'utf-8');
}

module.exports = {
    processfile
}