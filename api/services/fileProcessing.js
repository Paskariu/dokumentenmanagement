const db = require('./db');
const fs = require('fs');
const path = require('path');

async function processfile(_req, _res, file, timestamp) {
    let filename = (path.resolve('./uploads/' + timestamp + '-' + file.name)).replaceAll(path.sep, "/");
    console.log(filename);
    try {
        console.log(await db.query(`INSERT INTO files (timestamp, name, content) VALUES (${Date.now()}, \"${filename.toString()}\", \"${await readFile(file.mimetype, filename)}\");`));
    } catch (err) {
        console.log("Couldn´t read file: " + filename + "\n" + err);
    }
}

async function readFile(mime, fn) {
    let text = '';
    switch (mime) {
        case 'application/pdf':
            const pdfParse = require('pdf-parse');
            var data = await pdfParse(fs.readFileSync(fn));
            text = data.text;
            break;
        case 'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
            const officeParser = require('officeparser');
            text = await officeParser.parseWordAsync(fn);
            break;
    }
    console.log(text);
    console.log(typeof(text));
    text = text.replace('\"', '');
    text = text.replace("\'", '');
    console.log(text);
    return text;
}

function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

module.exports = {
    processfile
}