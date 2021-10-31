var carta1 = {
    nome: "Dragão de Fogo",
    imagem: "https://cdn1.dotesports.com/wp-content/uploads/2021/06/29084142/MTG-Dragon.jpg",
    atributos: {
        ataque: 80,
        defesa: 60,
        magia: 90
    }
}
var carta2 = {
    nome: "Dragão de Gelo",
    imagem: "https://img.poki.com/cdn-cgi/image/quality=78,width=600,height=600,fit=cover,g=0.5x0.5,f=auto/5d65cf33c17b54197c2a4055a3a7dbf006e015b59c63daef0f2c90577e4720ef.png",
    atributos: {
        ataque: 90,
        defesa: 30,
        magia: 150
    }
}
var carta3 = {
    nome: "Mundo Mágico",
    imagem: "imgs-cartas/fantasia-bruxo_planoFundo-1920x1080.jpg",
    atributos: {
        ataque: 80,
        defesa: 200,
        magia: 650
    }
}

var cartas = [carta1, carta2, carta3]

var x = 1
function mostrar(){
    var main = document.getElementById("main")

    if(x < 2){
        for(var i = 0; i < cartas.length; i++){
    
            var t = `<div id="dv">
                <h1>`+cartas[i].nome+`</h1><br>
                <img src="`+cartas[i].imagem+`"><br>
                <p>ataque: `+cartas[i].atributos.ataque+`</p><br>
                <p>defesa: `+cartas[i].atributos.defesa+`</p><br>
                <p>magia: `+cartas[i].atributos.magia+`</p>
                </div><br>
            `
            main.innerHTML += t
        }
        x++
    }
    else{
        alert("Botão ja foi apertado")
    }

}