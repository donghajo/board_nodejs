const mysql = require('mysql');
const connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    port : 3306,
    password : '980605',
    database : 'db_board'
});

module.exports = connection;

