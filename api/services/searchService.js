const db = require('./db');

async function search(content) {
    files = await db.query(`SELECT timestamp, name, content FROM files WHERE content LIKE \'%${content}%\' OR tags LIKE \'%${content}%\';`)
    return files;
}

module.exports = {
    search
}