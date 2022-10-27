const express = require('express')
const path = require('path')
const { Socket } = require('socket.io')
const app = express()

const server = require('http').createServer(app)
const io = require('socket.io')(server)

app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'public'))
app.engine('html', require('ejs').renderFile)//verr
app.set('view engine', 'html')

app.use('/', function(req, res){
    res.render('index.html')
})
//aq seria o select do mysql
let messages = []

io.on('connection', socket => {
    console.log('teste conectado '+socket.id)

    socket.on('sendMessage', data => {
        console.log(data)
        messages.push(data)
        socket.broadcast.emit('receivedMessage', data)
    })
})

server.listen(8080)