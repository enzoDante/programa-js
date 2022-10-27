const express = require("express")
const app = express()
const bodyparser = require("body-parser")

app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())
const conn = require("./banco")

// app.use(express.static("public"))
// const path = require("path")
// app.use("/static", express.static(path.join(__dirname,"public")))

app.get("/", function(req,res){
    res.sendFile(__dirname+"/index.html")
})
///:nome/:email/:senha
app.get("/cadastrarUsuario", function(req,res){
    let nome = req.query.nome
    let email = req.query.email
    let senha = req.query.senha
    //só usa req.body.algumnome qd for method e app. --> 'post'
    let x = {"nome": nome, "email": email, "senha":senha}
    let sql = `insert into tbl_usuario(nome, email, senha) values('${nome}', '${email}', '${senha}')` 
    conn.query(sql, function(error, result){
        
    })
    res.send(x)
})

app.listen(8080,function(){
    console.log("servidor rodando:)")
})