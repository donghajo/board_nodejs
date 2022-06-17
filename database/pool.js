const mysql = require('mysql2/promise');
const connection = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    port: 3306,
    password: '980605',
    database: 'db_board'
});




module.exports = connection;

