let http = require('http')
//o function tem diversas funcionalidade
//res - serve p mandar alguma resposta p o usuario
http.createServer(function(req, res){
    res.end("olaaaaa")//enviar uma mensagem

}).listen(8081) //abre um servidor em determinada porta
console.log('servidor aberto ;) vai lá http://localhost:8081 ')