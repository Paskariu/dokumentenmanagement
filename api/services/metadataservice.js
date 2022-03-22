const db = require('./db');

async function getMetaData(filename) {
    console.log(filename);
    let ret = '';
    const exiftool = require('node-exiftool')
    const ep = new exiftool.ExiftoolProcess()
    await ep.open()
        .then((pid) => console.log('Started exiftool process %s', pid))
        .then(() => ep.readMetadata(filename, ['-File:all']))
        .then((res) => ret = res)
        .then(() => ep.close())
        .then(() => console.log('Closed exiftool'))
        .catch(console.error)
    return ret;
}

async function setMetaData(filename, metadata) {
    const exiftool = require('node-exiftool')
    const ep = new exiftool.ExiftoolProcess()
    let ret = '';
    await ep.open()
        .then(() => ep.writeMetadata(filename, {
            all: '', // remove existing tags
            comment: 'Exiftool rules!',
            'Keywords+': metadata,
        }, ['overwrite_original']))
        .then((res) => ret = res)
        .then(() => ep.close())
        .catch(console.error)
    db.query(`UPDATE files SET tags = \"${metadata.join(',')}\" WHERE name=\"${filename}\";`);
    return ret;
}

module.exports = {
    getMetaData,
    setMetaData
}