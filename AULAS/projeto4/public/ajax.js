function fazGet(url){
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function fazPost(url, id, msg){
    let request = new XMLHttpRequest()
    request.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            let dados = JSON.parse(this.responseText)
            let main = document.getElementById("chatmsg")


            let hr = document.createElement("hr")
            main.appendChild(hr)
            let div = document.createElement("div")
            div.setAttribute("class", "comentarios")
            let h1 = document.createElement("h1")
            h1.innerHTML = dados.nome
            let p = document.createElement("p")
            p.innerHTML = dados.msg
            div.appendChild(h1)
            div.appendChild(p)
            let pp = document.createElement("p")
            pp.innerHTML = dados.data
            div.appendChild(pp)

            main.appendChild(div)
            // document.getElementById("chatmsg").innerHTML += this.responseText +"<br>"
        }
    }

    request.open('POST', url, true)
    // request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    request.setRequestHeader("Content-type", "application/json");

    request.send(JSON.stringify({"id": id, "msg": msg}))
}