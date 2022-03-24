const mysql = require('mysql2/promise');
const fs = require('fs');

const config = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
}

function init() {
    query(fs.read("documentmanagement.sql"));
}

async function query(sql, params) {
    const connection = await mysql.createConnection(config);
    const [result, ] = await connection.execute(sql, params);
    return result;
}

module.exports = {
    query,
    init
}