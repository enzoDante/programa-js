const express = require("express") //retorna função p criar o express
const app = express()//recebe função express criando uma cópia do framework
//===================carrega css e javascript=============================
app.use(express.static('public'))
const path = require('path')
app.use('/static', express.static(path.join(__dirname, 'public')))
//==========================================================================
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
//conexao mysql
const conn = require('./bd')

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
        //res.sendFile(__dirname + '/public/front/index.html')
        res.render('index')
    })

    app.get('/outro', function(req, res){
        //res.render('formulario')//exibir o arquivo do handlebars
        let sql = "SELECT * FROM postagens"
        conn.query(sql, function(err, result, fields){
            //console.log(result)
            res.render('outro', {valorrr: result})
            //res.send(result)
        })
        //res.sendFile(__dirname + '/public/front/outro.html')

    })

    app.post('/teste', function(req, res){

        //res.send('deu certo? '+ req.query.nome)
        // Post.create({
        //     titulo: req.body.nome,
        //     conteudo: req.body.texto

        // }).then(function(){
        //     res.redirect('/')//nome da rota, no caso a rota principal '/'
        // }).catch(function(erro){
        //     res.send("nn deu p inserir :( "+ erro)
        // })
        let nome = req.body.nome
        let x = req.body.nota
        x = x * 2
        let sql = `INSERT INTO postagens (titulo, conteudo) VALUES ('${nome}', ${x})`
        conn.query(sql, function(err, result, fields){
            //console.log(result)
            //res.sendFile(__dirname+"/public/front/outro.html")
            res.redirect('/outro')
        })
        //res.send('form recebido :)<br> nome: '+nome+" "+x)
    })

app.listen(8081, function(){
    console.log("Servidor rodando em http://localhost:8081 :)")
})//porta para rodar a aplicação, deve ser a última linha do código!!!
