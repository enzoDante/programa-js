//=======================================verifica se é permitido criar uma sala
function salaexistente(nome, form){
    let data = fazGet("http://localhost:8081/salaexiste/"+nome)
    // console.log(data)
    if(data == ""){
        form.submit()
    }else{
        document.getElementById("mm").style.display = 'block'
        document.getElementById("mm").innerHTML = "Sala existente, digite outro nome!"
    }
}
//=======================================cada sala será criada
function ordemsalas(el){
    let h3 = document.createElement("h3")
    let a1 = document.createElement("a")
    a1.setAttribute("class", 'sala')
    a1.innerHTML = `${el.nomes} |`
    let x = `/chat/${el.id_sala}`
    
    a1.setAttribute("onclick", `entrarNaSala('${x}', ${el.id_sala})`)
    h3.setAttribute('id', `${el.id_sala}`)
    // a1.href = `/chat/${el.id_sala}`
    
    // let a2 = document.createElement("a")
    // a2.innerHTML = "Sair"
    // x = `/sairchat/${el.id_sala}`

    // a2.setAttribute("onclick", `sairdasala('${x}', ${el.id_sala})`)
    // a2.href = `/sairchat/${el.id_sala}`

    h3.appendChild(a1)
    // h3.appendChild(a2)
    return h3

}
//=======================================mostra as salas criadas acima
function carregarsalas(){
    let data = fazGet("http://localhost:8081/minhassalas")
    // console.log(data)
    let valores = JSON.parse(data)

    let salas = document.getElementById("salas")

    if(valores){
        valores.forEach(element => {
            let div = ordemsalas(element)
            salas.appendChild(div)
        });
    }
}

//============================================procurar sala========
function procurar(){
    let sala = document.getElementById("sa").value 
    let data = fazGet("http://localhost:8081/procurarSalaC/"+sala)
    // console.log(data)
    let salasbusca = document.getElementById("salasbusca")
    salasbusca.innerHTML = ""

    let valores = JSON.parse(data)
    if(valores){
        valores.forEach(el => {
            let h3 = document.createElement("h3")
            let a1 = document.createElement("a")
            a1.innerHTML = el.nomes + " | entrar"
            a1.href = `/entrarSala/${el.id_sala}`
            h3.appendChild(a1)

            salasbusca.appendChild(h3)
        })
    }
}
//carrega as mensagens da sala em q entrou
//===========================================entra em bate papo========
var idDaSala = 0
function entrarNaSala(x, i){
    let aa = document.querySelector(".ta")
    if(document.querySelector(".ta"))
        aa.removeAttribute("class")
    // alert("testar")

    let salae = document.getElementById(i)
    // salae.style.backgroundColor = "#93C79E"
    salae.setAttribute("class", 'ta')

    //abaixo, carrega as msgs da sala
    idDaSala = i
    let data = fazGet(x)
    // console.log(data)

    let main = document.getElementById("chatmsg")
    main.innerHTML = ""
    let valores = JSON.parse(data)
    if(valores){
        valores.forEach(el => {
            // let hr = document.createElement("hr")
            // main.appendChild(hr)
            let div = document.createElement("div")
            div.setAttribute("class", 'comentarios')

            let h1 = document.createElement("h1")
            h1.innerHTML = el.nomeusu
            let p = document.createElement("p")
            p.innerHTML = el.msg
            div.appendChild(h1)
            div.appendChild(p)

            let pp = document.createElement("p")
            pp.innerHTML = el.dia 
            div.appendChild(pp)

            let like = document.createElement("a")
            let data1 = fazGet("http://localhost:8081/idmsgcurtido/"+el.id_msg)
            // console.log(data1)
            let valores1 = JSON.parse(data1)
            // console.log(valores1)
            if(valores1.idmsg){
                like.innerHTML = "Remover curtida"
            }else{
                like.innerHTML = "Curtir"

            }

            like.setAttribute("class", 'curtir')
            like.href = `/curtirmsg/${el.id_msg}`
            div.appendChild(like) 

            main.appendChild(div)
        })
    }

    let form = document.getElementById("ff")
    // form.setAttribute("action","/enviarmsg/"+i)

    let btn = document.getElementById("btnenviarmsg")
    btn.setAttribute("onclick", `enviarmsgg(event,${i})`)
    //tecla enter no textarea
    let penter = document.getElementById("texto")
    penter.setAttribute("onkeypress", `teclaEnter(event, ${i})`)

}
//tecla ente
function teclaEnter(e, i){
    if(e.keyCode === 13)
        enviarmsgg(e, i)
}
//=======================================enviar msg digitada em uma sala
function enviarmsgg(e, i){
    e.preventDefault()
    let form = document.getElementById("ff")
    let main = document.getElementById("chatmsg")

    let p = document.getElementById("mm")
    p.style.display = "none"

    let msg = document.getElementById("texto").value
    if(msg != ""){
        document.getElementById("texto").value = ""
        document.getElementById("texto").focus()

        msg = msg.replace(/merda/g, "*").replace(/porra/g, "*").replace(/bosta/g, "*")
        
        // console.log(msg)

        //inserir visualmente!
        // let hr = document.createElement("hr")
        // main.appendChild(hr)
        let div = document.createElement("div")
        div.setAttribute("class", 'comentarios')

        let h1 = document.createElement("h1")
        let nome = fazGet("http://localhost:8081/nome")
        h1.innerHTML = nome
        let p = document.createElement("p")
        p.innerHTML = msg
        div.appendChild(h1)
        div.appendChild(p)

        let pp = document.createElement("p")
        let dataaa = new Date()
        let dia  = dataaa.getDate().toString().padStart(2, '0')
        let mes  = (dataaa.getMonth()+1).toString().padStart(2, '0') //+1 pois no getMonth Janeiro começa com zero.
        let ano  = dataaa.getFullYear();
        let hj = `${dia}/${mes}/${ano}`
        pp.innerHTML = hj
        div.appendChild(pp)

        let like = document.createElement("a")
        like.innerHTML = "Curtir"
        like.setAttribute("class", 'curtir')
        let id_atual = fazGet("http://localhost:8081/idmsg")
        let valor = JSON.parse(id_atual)
        let idd = valor.id_msg
        // console.log(valor.id_msg)
        like.href = `/curtirmsg/${idd+1}`
        div.appendChild(like) 
        main.insertBefore(div, main.children[0])
        // main.appendChild(div)
        
        //parte do socket.io

        let id_usuar = fazGet("http://localhost:8081/idusuarioa")
        console.log(id_usuar)
        let obj = {
            idnovo: idd+1,
            idsala: i,
            idusuario: id_usuar,
            nome: nome,
            msg: msg,
            dia: hj
        }
        socket.emit('sendMessage', obj)



        // form.submit()
        // console.log(i)
        ///${i}/'${msg}'

        // fazPost(`http://localhost:8081/enviarmsg`, i, msg)
        // console.log(data)
    }else{
        p.style.display = "block"
    }
}

//carrega as msgs enviadas em tempo real!!!
socket.on('receivedMessage', function(message){
    if(message.idsala == idDaSala){

        let main = document.getElementById("chatmsg")
        let div = document.createElement("div")
        div.setAttribute("class", 'comentarios')
    
        let h1 = document.createElement("h1")
        h1.innerHTML = message.nome
        let p = document.createElement("p")
        p.innerHTML = message.msg
        div.appendChild(h1)
        div.appendChild(p)
    
        let pp = document.createElement("p")
        pp.innerHTML = message.dia
        div.appendChild(pp)
    
        let like = document.createElement("a")
        like.innerHTML = "Curtir"
        like.setAttribute("class", 'curtir')
        like.href = `/curtirmsg/${message.idnovo}`
        div.appendChild(like) 
        main.insertBefore(div, main.children[0])
    }
    // renderMessage(message)

})