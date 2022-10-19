const express = require("express") //retorna função p criar o express
const app = express()//recebe função express criando uma cópia do framework

//pegando a rota principal da aplicação
app.get("/", function(req, res){ //function é callback!
    res.send("Seja bem vindo ao meu app xD")//envia uma mensagem
})
//outras rotas q n é a principal "/"
app.get("/sobre", function(req, res){
    res.send("outra pagina :D")
})
app.get("/blog", function(req, res){
    res.send("mais uma pagina, agr blog :D")
})
//':' é um parametro
app.get("/ola/:nome/:cargo", function(req, res){
    //res.send(req.params)//req recebe dados de uma requisição 'json'
    let msg = "olaa "+req.params.nome+"<br> seu cargo: "+req.params.cargo
    res.send(msg)
})

app.listen(8081, function(){
    console.log("Servidor rodando em http://localhost:8081 :)")
})//porta para rodar a aplicação, deve ser a última linha do código!!!
