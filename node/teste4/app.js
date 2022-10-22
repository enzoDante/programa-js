const express = require("express") //retorna função p criar o express
const app = express()//recebe função express criando uma cópia do framework
//===================carrega css e javascript=============================
app.use(express.static('public'))
const path = require('path')
app.use('/static', express.static(path.join(__dirname, 'public')))
//==========================================================================
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const Post = require('./models/Posts')
const { Sequelize } = require("./models/db")

//deve configurar o handlebars, para usar o template engine
//Config
    //Template Engine
        app.engine('handlebars', handlebars.engine({defaultLayout: 'main',
            runtimeOptions: {
                allowProtoPropertiesByDefault: true,
                allowProtoMethodsByDefault: true
            }}))
        app.set('view engine', 'handlebars')
    //Body Parser
        app.use(bodyParser.urlencoded({extended: false}))
        app.use(bodyParser.json())

//Rotas
    app.get('/', function(req, res){ //rota principal, pois só tem '/'
        //Post.all() retorna tudo da tabela relacionada a variavel post
        Post.findAll({order: [['id', 'DESC']]}).then(function(posts){
            res.render('home', {teste: posts})//com a '{}' é possivel passar qualquer dado p o front-end

        })
    })

    app.get('/cad', function(req, res){
        res.render('formulario')//exibir o arquivo do handlebars
    })

    app.post('/add', function(req, res){
        Post.create({
            titulo: req.body.nome,
            conteudo: req.body.texto

        }).then(function(){
            res.redirect('/')//nome da rota, no caso a rota principal '/'
        }).catch(function(erro){
            res.send("nn deu p inserir :( "+ erro)
        })
        //let nome = req.body.nome
        //res.send('form recebido :)<br> nome: '+nome)
    })

app.listen(8081, function(){
    console.log("Servidor rodando em http://localhost:8081 :)")
})//porta para rodar a aplicação, deve ser a última linha do código!!!
