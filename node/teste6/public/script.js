function fazGet(url){
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}
function mostrard(e){
    let div = document.createElement("div")

    let h1 = document.createElement("h1")
    h1.innerHTML = e.nome
    let p = document.createElement("p")
    p.innerHTML = e.email
    div.appendChild(h1)
    div.appendChild(p)
    return div
}
//==============principal==============
function carregar(){
    let data = fazGet("http://localhost:8084/outro")
    let valores = JSON.parse(data)
    let main = document.getElementById("tt")

    console.log(valores)
    if(valores){
        valores.forEach(element => {
            //console.log(element)
            let dado = mostrard(element)
            main.appendChild(dado)
        });
    }
    ver()

}
//se estiver logado======
function ver(){
    let x = fazGet("http://localhost:8084/verificar")
    console.log(x)
    let m = document.getElementById("s")
    if(x != ""){
        let a = document.createElement("a")
        a.href = '/sair'
        a.innerHTML = 'sair'
        m.appendChild(a)
    }else{
        let a = document.createElement("p")
        a.innerHTML = 'aaa'
        m.appendChild(a)
    }
    //let val = JSON.parse(data)
    //console.log(val)
}

function testar(){
    console.log('um teste 1 ')
    alert('test')
}