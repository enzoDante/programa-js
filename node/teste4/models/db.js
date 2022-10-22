const Sequelize = require('sequelize')
//conexao com o banco de dados
    const sequelize = new Sequelize('test', 'root', '', {
        host:  "localhost",
        dialect: 'mysql'
    })

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}