const mysql = require('mysql2');
const fs = require('fs');

const config = {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || '3306',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    /* host: 'mysqldb',
    port: '3306',
    user: 'root',
    password: 'development', */
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
    console.log(queryy);
    // const connection = mysql.createConnection(config);
    const connection = mysql.createPool(config);
    await connection.promise().query(queryy, null, (err, result) => {
        if (err) {
            console.log(err);
        }
    });
}


function DBquery(sql, params) {
    sql = "USE documentmanagement; " + sql;
    const connection = mysql.createConnection(config);
    console.log(sql);
    return connection.promise().query(sql, params, (err, result) => {
        return err ? reject(err) : result;
    });
}

module.exports = {
    DBquery,
    init
}