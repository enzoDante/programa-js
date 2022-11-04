const express = require('express')
const app = express()
//========================================
const bodyParser = require('body-parser') //permite receber dados de formularios
const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017/'

app.get('/', function(req, res){
    res.sendFile(__dirname + "/index.html")
})
app.get('/qualquer', function(req, res){
    MongoClient.connect(url, function(err, db){
        if(err) throw err
        var dbo = db.db("banco_de_dados")
        var myobj = { name: "Inc", address: "2222 37" };
        dbo.collection("cientistas").insertOne(myobj, function(err, res) {
            if (err) throw err;
            console.log("1 document inserted");
            db.close();
        });
        res.send('teste')
        console.log('deu certo')
    })
})


app.get('/qq2', function(req, res){
    MongoClient.connect(url, function(err, db){
        if (err) throw err;
        var dbo = db.db("banco_de_dados");
        dbo.collection("cientistas").find({}).toArray(function(err, result) {
            if (err) throw err;
            console.log(result);
            res.send(result)
            db.close();
        });
    })
})


app.get('/aaa', function(req, res){
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("banco_de_dados");
        var query = { name: "aaaaaaaa Inc", address: "2222 37" };
        dbo.collection("cientistas").find(query).toArray(function(err, result) {
          if (err) throw err;
          console.log(result);
          res.send(result)
          db.close();
        });
      });
})

app.listen(8080, function(){
    console.log("Servidor rodando em http://localhost:8080 :)")
})