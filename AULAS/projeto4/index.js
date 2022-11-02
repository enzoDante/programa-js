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
//socket.io - para atualizar chat em tempo real
const {socket} = require('socket.io')
const server = require('http').createServer(app)
const io = require('socket.io')(server)
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

//principal==========================================================
    app.get('/', function(req, res){
        res.sendFile(__dirname+"/front/index.html")
    })

//variaveis globais
    let sql = "", nome="", email="",senha="", id="", msg=""

//salas=========================================================================
    //criar salas======
    app.post('/criarSalaC', function(req,res){
        let nome = req.body.nome
        let sql = `INSERT INTO salas (nomes, id_criador) VALUES('${nome}',${req.session.usuario})`
        conn.query(sql, function(err, result){
            res.redirect('/')
        })
    })
    //página onde cria as salas
    app.get('/criarSala', function(req, res){
        res.sendFile(__dirname+"/front/criarsala.html")
    })
    //=====salas onde estou(mostra todas as salas que entrei)====
    app.get('/minhassalas', function(req, res){
        let where = `id_criador=${req.session.usuario}`
        //SELECT * FROM salas, salaxusuario WHERE ${where}  OR idu=${req.session.usuario}
        let sql = `SELECT * FROM salas WHERE ${where}`
        conn.query(sql, function(err, result){
            let um = result
            // console.log(um)

            let v = `idu=${req.session.usuario} and ids=id_sala`
            let sql1 = `select * from salas, salaxusuario where ${v}`
            conn.query(sql1, function(err, result){
                let dois = result
                // console.log(dois)
                let salas = um.concat(dois)
                res.send(salas)
            })


        })
        
    })
    //entrar em sala, insere o id do usuario na sala!
    app.get('/entrarSala/:i', function(req, res){
        let i = req.params.i
        //recebe sala do parametro
        let sql2 = `SELECT * from salas WHERE id_sala=${i}`
        conn.query(sql2, function(err, result){
            //verifica caso o criado seja o usuario logado
            if(result[0].id_criador != req.session.usuario){
                //se n for, verifica se ele ja esta na tabela salaxusuario
                let sql = `SELECT * FROM salaxusuario where idu=${req.session.usuario} and ids=${i}`
                conn.query(sql, function(err, result){
                    
                    if(result[0]){
                        console.log("existe")
                    }else{
                        //caso n esteja na sala da tabela salaxusuario ele entra na sala
                        let sql1 = `INSERT INTO salaxusuario(idu, ids) VALUES(${req.session.usuario}, ${i})`
                        conn.query(sql1, function(err, result){
                            // res.redirect('/')
                        })
                    }
                })
                
            }
        })
        res.redirect('/')
    })
    //entra em determinada sala p conversar(no caso, o id já estava na sala anteriormente)
    //aqui é p ele entrar na sala e conversar
    app.get('/chat/:i', function(req, res){
        let i = req.params.i
        let sql = `SELECT * from msgs WHERE id_sala=${i} ORDER BY id_msg DESC`
        conn.query(sql, function(err, result){
            // console.log(result)
            res.send(result)
        })
    })
    //enviar msg em determinada sala(conversar com outros q estão na msm sala)
    // /:i/
    app.post('/enviarmsg', function(req, res){
        let valores = req.body
        // let i = req.params.i
        // let msg = req.body.texto
        let data = new Date()
        let dia  = data.getDate().toString().padStart(2, '0')
        let mes  = (data.getMonth()+1).toString().padStart(2, '0') //+1 pois no getMonth Janeiro começa com zero.
        let ano  = data.getFullYear();
        let hj = `${dia}/${mes}/${ano}`

        // console.log('abaixoooo')
        // console.log(valores)
        // console.log(i)
        // console.log(`${msg}`)
        
        let sql1 = `SELECT nome from usuarios where id_usu=${req.session.usuario}`
        conn.query(sql1, function(err, result){
            let nome = result[0].nome
            let sql = `INSERT INTO msgs (id_sala, id_usu, nomeusu, dia, msg) VALUES(${valores.id}, ${req.session.usuario}, '${nome}', '${hj}', '${valores.msg}')`
            conn.query(sql, function(err, result){
                let nomehj = {"nome": nome, "data":hj}
                const valors2 = { ...nomehj, ...valores}
                // console.log(valors2)
                res.send(valors2)
            })
        })
        
        // res.redirect('/')
    })
    //usando o socket io =====chat tempo real
    io.on('connection', socket => {
        // console.log('teste conectado '+socket.id)
        //qd usuario enviar uma mensagem, vai carregar aq
        socket.on('sendMessage', data => {
            // console.log(data)
            let sql = `INSERT INTO msgs (id_sala, id_usu, nomeusu, dia, msg) VALUES(${data.idsala}, ${data.idusuario}, '${data.nome}', '${data.dia}', '${data.msg}')`
            // console.log(sql)
            conn.query(sql)

            socket.broadcast.emit('receivedMessage', data)
        })
    })


    //=============curtir comentário=====
    app.get('/curtirmsg/:idd', function(req, res){
        let idmsg = req.params.idd
        let sql = `SELECT * FROM curtidas WHERE idusu=${req.session.usuario} AND idmsg=${idmsg}`
        conn.query(sql, function(err, result){
            console.log(result)
            if(result == ""){
                console.log(idmsg)
                let sql1 = `INSERT INTO curtidas (idusu, idmsg) VALUES(${req.session.usuario}, ${idmsg})`
                conn.query(sql1, function(err, resutl){
                    // req.send('aa')
                    res.redirect('/')
                })
            }
        })
    })

    //procurar sala (sala criada por alguém)
    app.get('/procurarSalaC/:sa', function(req, res){
        let sa = req.params.sa
        let sql = `SELECT * FROM salas WHERE nomes LIKE '%${sa}%' `
        conn.query(sql, function(err, result){
            // console.log(result)
            res.send(result)
        })
    })
    //página html do procurar sala acima!
    app.get('/procurarSala', function(req, res){
        res.sendFile(__dirname+"/front/salas.html")
    })
    //página html de msgs mais curtidas
    app.get('/postscurtidas', function(req, res){
        res.sendFile(__dirname+'/front/msgCurtidas.html')
    })
    //recebe todas as curtidas
    app.get('/todascurtidas', function(req, res){
        //select * from curtidas inner join msgs on msgs.id_msg=curtidas.idmsg
        let sql = `select *, count(idmsg) as lik from curtidas inner join msgs on msgs.id_msg=curtidas.idmsg group by idmsg order by count(idmsg) DESC, idmsg ASC`
        conn.query(sql, function(err, result){
            console.log(result)
            res.send(result)
        })
    })

//cadastro==========================================================
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

//login==========================================================
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

//verificar valores (ajax)==========================================================
    //retorna sala caso existe
    app.get("/salaexiste/:n", function(req, res){
        let nome = req.params.n
        let sql = `SELECT * FROM salas WHERE nomes='${nome}'`
        conn.query(sql, function(err, result){
            // console.log(result)
            res.send(result[0])
        })
    })

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
    //retorna um id p as msgs
    app.get('/idmsg', function(req, res){
        let sql = `select * from msgs order by id_msg DESC`
        conn.query(sql, function(err, result){
            // console.log(result[0])
            if(result != "")
                res.send(result[0])
            else{
                let idd = {"id_msg": 0}
                res.send(idd)
            }
        })
    })
    //retorna o id do usuario
    app.get('/idusuarioa', function(req, res){
        res.send(req.session.usuario)
    })
//destruir sessões==========================================================
    //link gerado caso usuário esteja logado, ele poderá sair da conta
    app.get("/sairDestroy", function(req, res){
        req.session.destroy()
        res.redirect('/')
    })
    //somente para testes----------------------
    app.get('/destruir', function(req, res){
        req.session.destroy()
        res.send("nn sei")
    })

/*
app.listen(8081, function(){
    console.log("Servidor rodando em http://localhost:8081 :)")
})//porta para rodar a aplicação, deve ser a última linha do código!!!*/
server.listen(8081, function(){
    console.log("Servidor rodando em http://localhost:8081 :)")
})
