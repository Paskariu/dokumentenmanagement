const db = require('./db');

async function getMetaData(filename) {
    tags = await db.DBquery(`SELECT tags FROM files WHERE name=\'${filename}\'`);
    console.log(tags[0][1][0]);
    return tags[0][1][0];
}

async function setMetaData(filename, metadata) {
    metadata = metadata.join(',');
    oldData = await getMetaData(filename);
    if (oldData != 'null' && oldData != undefined) {
        metadata += ',' + oldData;
    }
    ret = db.DBquery(`UPDATE files SET tags = \"${metadata}\" WHERE name=\"${filename}\";`);
    return ret;
}

module.exports = {
    getMetaData,
    setMetaData
}