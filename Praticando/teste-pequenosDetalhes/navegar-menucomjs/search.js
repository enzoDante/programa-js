function pesquisar(){
    let a, input, valor, lista, ellista
    input = document.getElementById("pesquisa")
    valor = input.value.toUpperCase()

    lista = document.getElementById("menupesquisa")
    ellista = lista.getElementsByTagName("li")
    
    for(let i = 0; i < ellista.length; i++){
        a = ellista[i].getElementsByTagName("a")[0]

        if(a.innerHTML.toUpperCase().indexOf(valor) > -1){
            ellista[i].style.display = ""//display padrão da tag!
        }else{
        ellista[i].style.display = "none"
        }
    }

}