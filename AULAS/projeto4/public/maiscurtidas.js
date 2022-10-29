function curt(){
    let data = fazGet('/todascurtidas')
    
    let valores = JSON.parse(data)
    let total = 0

    let main = document.getElementById("main")
    valores.forEach(element => {
        total++
        if(total <= 10){
            let div = document.createElement("div")
            div.setAttribute("class", 'curtidasel')
            let h1 = document.createElement("h1")
            h1.innerHTML = `${element.nomeusu}`
            div.appendChild(h1)
    
            let msg = document.createElement("p")
            msg.innerHTML = `${element.msg}`
            let dia = document.createElement("p")
            dia.innerHTML = `${element.dia}`
            let cc = document.createElement("p")
            
            cc.innerHTML = `Curtidas: ${element.lik}`
            div.appendChild(msg)
            div.appendChild(cc)
            div.appendChild(dia)
            main.appendChild(div)
        }

    });    
    
}