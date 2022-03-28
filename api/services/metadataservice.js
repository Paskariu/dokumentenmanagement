const db = require('./db');

async function getMetaData(filename) {
    tags = db.DBquery(`SELECT tags FROM files WHERE name=\'${filename}\'`);
    return tags;
}

async function setMetaData(filename, metadata) {
    metadata = metadata.join(',');
    metadata += getMetaData(filename);
    db.DBquery(`
        UPDATE files SET tags = \"${metadata}\" WHERE name=\"${filename}\";`);
    return ret;
}

module.exports = {
    getMetaData,
    setMetaData
}