const express = require('express')
const app = express()
//===========arquivos estáticos===========
app.use(express.static('public'))
const path = require('path')
app.use('/static', express.static(path.join(__dirname, 'public')))
//========================================
const bodyParser = require('body-parser') //permite receber dados de formularios
//conexao mysql
const conn = require('./bd')
//sessoes de login
const session = require('express-session')
//===
//Config
    //express-session
        app.use(session({
            secret: 'asdcvbcvxsssdda',
            resave: true,
            saveUninitialized: true
        }))
    //Body Parser
        app.use(bodyParser.urlencoded({extended: false}))
        app.use(bodyParser.json())

//principal
    app.get('/', function(req, res){
        res.sendFile(__dirname+"/front/index.html")
    })

//variaveis globais
    let sql = "", nome="", email="",senha="", id="", msg=""

//cadastro
    app.get('/cadastro', function(req, res){
        res.sendFile(__dirname+"/front/cadastro.html")
    })
    app.post('/cadastroC', function(req, res){
        let nome = req.body.nome
        let email = req.body.email
        let senha = req.body.senha
        
        sql = `SELECT email from usuarios WHERE email='${email}'`
        conn.query(sql, function(err, result){
            if(result == ""){
                let v = `('${nome}', '${email}', '${senha}' )`
                sql = `INSERT INTO usuarios (nome,email,senha) VALUES ${v} `
                conn.query(sql, function(){
                })
                //===
                let sql1 = `SELECT * FROM usuarios WHERE email='${email}'`
                conn.query(sql1, function(err, result, fields){
                    id = result[0].id_usu                   
                    req.session.usuario = `${id}`
                    res.redirect('/')
                })
            }else{
                res.redirect('/cadastro')
            }
        })
        
    })

//login
    app.get('/login', function(req, res){
        res.sendFile(__dirname+"/front/login.html")
    })
    app.post('/loginC', function(req, res){
        let email = req.body.email
        let senha = req.body.senha
        let sql = `SELECT * FROM usuarios WHERE email='${email}' AND senha='${senha}'`
        conn.query(sql, function(err, result){
            // console.log(result)
            // console.log(result[0].id_usu)
            req.session.usuario = `${result[0].id_usu}`
            res.redirect('/')
        })
        //res.send(email)
    })

//verificar valores (ajax)
    //retornar nome de usuario
    app.get('/nome', function(req, res){
        let sql = `SELECT nome FROM usuarios WHERE id_usu=${req.session.usuario}`
        conn.query(sql, function(err, result){
            // console.log(result)
            res.send(result[0].nome)
        })
    })
    //envia o dado dentro da session
    app.get('/logado', function(req, res){
        res.send(req.session.usuario)
    })
    //retorna o dado(vazio caso não exista esses dados na tabela)
    app.get('/email/:ema', function(req, res){
        let emaill = req.params.ema
        
        let sql = `SELECT id_usu FROM usuarios WHERE email='${emaill}'`
        conn.query(sql, function(err, result){
            // console.log(result)
            res.send(result[0])
        })
    })
    //retorna o dado(vazio caso não exista esses dados na tabela)
    app.get('/senha/:s/:e', function(req, res){
        let senha = req.params.s
        let email = req.params.e  
        let sql = `SELECT id_usu FROM usuarios WHERE email='${email}' AND senha='${senha}'`
        conn.query(sql, function(err, result){
            // console.log(result)
            res.send(result[0])
        })
    })
//destruir sessões
    //link gerado caso usuário esteja logado, ele poderá sair da conta
    app.get("/sairDestroy", function(req, res){
        req.session.destroy()
        res.redirect('/')
    })
    app.get('/destruir', function(req, res){
        req.session.destroy()
        res.send("nn sei")
    })


app.listen(8081, function(){
    console.log("Servidor rodando em http://localhost:8081 :)")
})//porta para rodar a aplicação, deve ser a última linha do código!!!
