const mysql = require('mysql2/promise')

const pool = mysql.createPool({
    host : 'localhost',
    port : 3306,
    user : 'root',
    passwrod: '980605',
    database : 'my server',
    connectionLimit : 10
})

module.exports = pool