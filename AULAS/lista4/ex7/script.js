function evento(){
    let valor = document.getElementById("texto").value 
    let tab = document.getElementById("tabela")
    tab.innerHTML = ""

    let p = document.createElement("p")
    if(valor == "")
        p.innerHTML = "O campo é obrigatório!!!"
    else
        p.innerHTML = "O campo foi preenchido :)"
    tab.appendChild(p)
}