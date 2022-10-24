const express = require("express") //retorna função p criar o express
const app = express()//recebe função express criando uma cópia do framework
//===================carrega css e javascript=============================
app.use(express.static('public'))
const path = require('path')
app.use('/static', express.static(path.join(__dirname, 'public')))
//==========================================================================
const bodyParser = require('body-parser')
//======sessões de login=========
const session = require('express-session')
//conexao mysql
const conn = require('./bd')

//deve configurar o handlebars, para usar o template engine
//Config
    //express-session
        app.use(session({
            secret: 'asd',
            resave: true,
            saveUninitialized: true
        }))
    //Body Parser
        app.use(bodyParser.urlencoded({extended: false}))
        app.use(bodyParser.json())
    //nn sei ------------adicionado p receber json
        app.use(express.json());
        app.use(express.urlencoded({ extended: false }));

//Rotas
    app.get('/', function(req, res){ //rota principal, pois só tem '/'
        res.sendFile(__dirname + '/front/index.html')
    })
    //========================================================
        app.get('/outro', function(req, res){
            //res.render('formulario')//exibir o arquivo do handlebars
            let sql = "SELECT * FROM usuarios"
            conn.query(sql, function(err, result, fields){
                //console.log(result)
                //res.render('outro', {valorrr: result})
                res.send(result)
            })
            //res.sendFile(__dirname + '/public/front/outro.html')

        })
        app.get('/todos', function(req, res){
            res.sendFile(__dirname + '/front/todos.html')
        })
        
        app.get('/verificar', function(req, res){
            
            // req.session.destroy(function(err) {
            //     // cannot access session here
            // })
            res.send(req.session.usuario)
            // if(req.session.usuario){
            //     res.send(req.session.usuario)
            // }
        })
    //========================================================
        app.get('/sair', function(req, res){
            req.session.destroy()
            res.redirect('/login')
        })
        app.get('/login', function(req,res){
            if(!req.session.login)
                res.sendFile(__dirname+"/front/login.html")
            else
                res.redirect('/todos')
        })
        app.post('/logar', function(req, res){
            let nome = req.body.nome
            let senha = req.body.senha
            let sql = `SELECT * FROM usuarios WHERE nome='${nome}' AND senha='${senha}'`

            conn.query(sql, function(err, result, fields){
                if(result != ""){
                    console.log(result[0].id)
                    req.session.usuario = `${result[0].id}`
                    res.redirect('/todos')
                }
                else
                    console.log("hmm teste")
            })
        })
    //========================================================
    app.get('/criarpagina', function(req, res){
        res.sendFile(__dirname+"/front/cadastro.html")
    })
    app.post('/criar', function(req, res){
        let nome = req.body.nome
        let email = req.body.email
        let senha = req.body.senha
        let sql = `INSERT INTO usuarios (nome, email, senha) VALUES ('${nome}','${email}','${senha}')`
        conn.query(sql, function(){
            res.redirect('/todos')
        })
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
    //testeeee ajax com post======
    app.post('/testt', function(req, res){
        let aa = req.body.item
        console.log(req.body)
        res.send(aa)
    })
    app.get('/tesste', function(req, res){
        res.sendFile(__dirname + "/front/testeenviar.html")
    })

app.listen(8084, function(){
    console.log("Servidor rodando em http://localhost:8084 :)")
})//porta para rodar a aplicação, deve ser a última linha do código!!!
