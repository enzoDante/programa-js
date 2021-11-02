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


//teste, não entendi algumas coisas aqui... mas deu certo
function imagem(){
    if(this.files && this.files[0]){
        var arquivo = new FileReader()
        arquivo.onload = function(e){
            document.getElementById("img").src = e.target.result
        }
        arquivo.readAsDataURL(this.files[0])
    }
}
document.getElementById("imagei").addEventListener("change", imagem, false)