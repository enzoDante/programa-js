var nome = window.prompt("Digite seu nome:")
var div = document.getElementById("nome")
div.innerHTML = `<h1>Olá ${nome}</h1><br><div id="so"></div>`

function soma(){
    var div1 = document.getElementById("so")
    var n1 = parseInt(document.getElementById("n1").value)
    var n2 = parseInt(document.getElementById("n2").value)
    var s = n1 + n2
    //window.alert(`soma é ${s}`)
    div1.innerHTML = `<p>a soma é ${s}</p>`
}