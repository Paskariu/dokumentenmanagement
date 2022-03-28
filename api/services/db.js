const mysql = require('mysql2');
const fs = require('fs');

const config = {
    // host: 'localhost',
    // port: '3306',
    // user: 'root',
    // password: 'password',
    host: 'mysqldb',
    port: '3306',
    user: 'root',
    password: 'development',
    multipleStatements: true
}

// async function init() {
//     const queryy = fs.readFileSync("./services/documentmanagement.sql").toString();
//     const connection = await mysql.createConnection(config);
//     connection.connect(function(err) {
//         if (err) throw err;
//         connection.query(queryy, function(err, result) {
//             if (err) throw err;
//         });
//     });
// }

async function init() {
    const queryy = fs.readFileSync("./api/services/documentmanagement.sql").toString();
    const connection = await mysql.createConnection(config);
    connection.connect()
        .catch(err => {
                console.log(String(err));
                setTimeout(function() {
                    console.log('Retrying first connect...');
                    connection.connect().catch(() => {});
                }, 5000);
            }
        );
    console.log(queryy);
    await connection.query(queryy, function (err, result) {
        if (err) throw err;
        connection.end();
    });
    console.log('succes');
}

async function query(sql) {
    sql = "USE documentmanagement; " + sql;
    const connection = await mysql.createConnection(config);
    connection.connect(function(err) {
        if (err) throw err;
        connection.query(sql, function(err, result) {
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