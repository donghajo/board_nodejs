const mysql = require('mysql');
const connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '980605',
    database : 'db_board'
});

module.exports = connection;

