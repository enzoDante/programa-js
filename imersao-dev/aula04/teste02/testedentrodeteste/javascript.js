function addcomentario(){
    var main = document.getElementById("main")
    var mensagem = document.getElementById("areadetexto").value
    if(mensagem != ""){
        var coment = "<textarea disabled cols='50' rows='6'>"+mensagem+"</textarea><br>"
        main.innerHTML = main.innerHTML + coment
    }
    else{
        alert("Digite alguma mensagem na caixa abaixo!")
    }
}