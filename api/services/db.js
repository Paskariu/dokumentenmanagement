const mysql = require('mysql2/promise');

const config = {
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: '',
    database: 'documentmanagement'
}

async function query(sql, params) {
    const connection = await mysql.createConnection(config);
    const [result, ] = await connection.execute(sql, params);
    return result;
}

module.exports = {
    query
}