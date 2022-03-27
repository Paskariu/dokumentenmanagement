const mysql = require('mysql');
const fs = require('fs');

const config = {
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'password',
    database: 'documentenmanagent'
}

function init() {
    query(fs.readFile("./services/documentmanagement.sql", (err, data) =>{
        if (err) throw err;
        console.log(data);
    }));
}

async function query(sql, params) {
    const connection = await mysql.createConnection(config);
    connection.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        connection.query(sql, function (err, result) {
            if (err) throw err;
            console.log("Table created");
        });
    });
    // const [result, ] = await connection.query(sql, params);
    // return result;
}

module.exports = {
    query,
    init
}