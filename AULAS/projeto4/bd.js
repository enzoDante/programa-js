const mysql = require('mysql2')
const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "projeto4_web"
})

module.exports = conn