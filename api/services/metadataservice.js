var ffmetadata = require("ffmetadata");


async function getMetaData(filename) {
    console.log(filename);
    let ret = ffmetadata.read(filename, function(err, data) {
        if (err) console.error("Error reading metadata", err);
        else console.log(data);
    });
    return ret;
}

function setMetaData(filename, metadata) {
    ffmetadata.write(filename, metadata);
}

module.exports = {
    getMetaData,
    setMetaData
}