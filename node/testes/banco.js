const mysql = require('mysql2')
const app = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password: '',
    database: 'test'
})
module.exports = app