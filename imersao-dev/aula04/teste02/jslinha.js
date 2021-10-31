function addlinha(){
    var texto = document.getElementById("texto").value
    if(texto != ""){
        var tabela = document.getElementById("tabela")

        var linha = "<tr><td colspan='2'>"+texto+"</td></tr>"
        tabela.innerHTML = tabela.innerHTML + linha

        document.getElementById("texto").value = ""
    }
    else{
        alert("digite algo na caixa de texto!")
    }


}