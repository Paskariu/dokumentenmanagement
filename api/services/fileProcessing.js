const db = require('./db');
const fs = require('fs');
const path = require('path');
const meta = require('./metadataservice');

async function processfile(_req, _res, file, timestamp) {
    let filename = (path.resolve('./uploads/' + timestamp + '-' + file.name)).replaceAll(path.sep, "/");
    let tags = await meta.getMetaData(filename);
    tags = tags.data[0].Keywords;
    console.log(tags);
    console.log(typeof(tags));
    if (tags != undefined) {
        tags = tags.join(",");
        tags = `\"${tags}\"`;
    } else {
        tags = 'NULL';
    }
    console.log(filename);
    try {
        console.log(await db.query(`INSERT INTO files (timestamp, name, content, tags) VALUES (${Date.now()}, \"${filename.toString()}\", \"${await readFile(file.mimetype, filename)}\", ${tags});`));
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
    text = text.replace('\"', '');
    text = text.replace("\'", '');
    return text;
}

module.exports = {
    processfile
}