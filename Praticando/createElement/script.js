function criar(){
    var res = document.getElementById("res")
    
    var h1 = document.createElement("h1")
    h1.setAttribute("class","h")
    h1.innerHTML = `X`

    var div = document.createElement("div")
    div.setAttribute("class", "caixa")
    //div.setAttribute("onclick","fechar(this)")
    h1.setAttribute("onclick","fechar(this)")
    div.appendChild(h1)
    


    res.appendChild(div)
}
function fechar(e){
    e.parentNode.outerHTML = ''
    //se fosse o div com onclick, nn teria parentNode!!!
}