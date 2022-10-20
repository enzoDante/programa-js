const express = require("express") //retorna função p criar o express
const app = express()//recebe função express criando uma cópia do framework
const handlebars = require('express-handlebars')
const Sequelize = require('sequelize')



//deve configurar o handlebars, para usar o template engine
//Config
    //Template Engine
        app.engine('handlebars', handlebars({defaultLayout: 'main'}))
        app.set('view engine', 'handlebars')
    //conexao com o banco de dados
        const sequelize = new Sequelize('projeto4_visual', 'root', '', {
            host:  "localhost",
            dialect: 'mysql'
        })

app.listen(8081, function(){
    console.log("Servidor rodando em http://localhost:8081 :)")
})//porta para rodar a aplicação, deve ser a última linha do código!!!
