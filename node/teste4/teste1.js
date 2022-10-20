const express = require("express") //retorna função p criar o express
const app = express()//recebe função express criando uma cópia do framework

//pegando a rota principal da aplicação
//res.send("Seja bem vindo ao meu app xD")//envia uma mensagem
app.get("/", function(req, res){ //function é callback!
    //__dirname retorna o diretório padrão da aplicação, no meu caso:
    //D:\codigo-vscode\programa-js\node\teste4
    res.sendFile(__dirname + "/sites/index.html")//mandar um arquivo
})
//outras rotas q n é a principal "/"
app.get("/sobre", function(req, res){
    res.sendFile(__dirname + "/sites/sobre.html")
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
