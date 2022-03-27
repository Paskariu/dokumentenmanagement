const mysql = require('mysql2');
const fs = require('fs');

const config = {
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'password',
    // host: 'mysqldb',
    // port: '3306',
    // user: 'development',
    // password: 'development',
    multipleStatements: true
}

function init() {
    const queryy = fs.readFileSync("./services/documentmanagement.sql").toString();
    console.log(queryy);
    query(queryy);
}

async function query(sql) {
    const connection = await mysql.createConnection(config);
    connection.connect(function(err) {
        if (err) throw err;
        connection.query(sql, function (err, result) {
            if (err) throw err;
        });
    });
    // const [result, ] = await connection.query(sql, params);
    // return result;
}

module.exports = {
    query,
    init
}