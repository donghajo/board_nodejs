var mysql = require('mysql');
var connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '980605',
    database : 'db_board'
});

module.exports = connection;


route