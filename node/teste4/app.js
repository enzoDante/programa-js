const express = require("express") //retorna função p criar o express
const app = express()//recebe função express criando uma cópia do framework
//===================carrega css e javascript=============================
app.use(express.static('public'))
const path = require('path')
app.use('/static', express.static(path.join(__dirname, 'public')))
//==========================================================================
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const Sequelize = require('sequelize')

//deve configurar o handlebars, para usar o template engine
//Config
    //Template Engine
        app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
        app.set('view engine', 'handlebars')
    //Body Parser
        app.use(bodyParser.urlencoded({extended: false}))
        app.use(bodyParser.json())
    //conexao com o banco de dados
        const sequelize = new Sequelize('projeto4_visual', 'root', '', {
            host:  "localhost",
            dialect: 'mysql'
        })

//Rotas
    app.get('/cad', function(req, res){
        res.render('formulario')//exibir o arquivo do handlebars
    })
    app.post('/add', function(req, res){
        let nome = req.body.nome
        res.send('form recebido :)<br> nome: '+nome)
    })

app.listen(8081, function(){
    console.log("Servidor rodando em http://localhost:8081 :)")
})//porta para rodar a aplicação, deve ser a última linha do código!!!
