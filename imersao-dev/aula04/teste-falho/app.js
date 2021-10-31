function adicionarFilme(){
    var imagem = document.getElementById("filme2").value
    if(imagem.endsWith('.jpg') || imagem.endsWith('.png')){
        adiciona(imagem)
    }
    else{
        alert("imagem inválida!")
    }
    document.getElementById("filme2").value = ""
}

function adiciona(filme){
    var mostrar = document.getElementById("listafilme")
    var imagemimg = "<img src="+filme+">"

    mostrar.innerHTML = mostrar.innerHTML + imagemimg
}