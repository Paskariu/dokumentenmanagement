const db = require('./db');

async function search(content) {
    files = await db.query(`SELECT timestamp, name, content, tags FROM files WHERE content LIKE \'%${content}%\' OR tags LIKE \'%${content}%\';`)
    files = files[0][1];
    return files;
}

module.exports = {
    search
}