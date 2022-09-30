function criar(){
    let caixa = document.getElementById("selecionar")
    let nome = document.getElementById("aluno").value 

    let opcaonova = document.createElement("option")
    opcaonova.innerHTML = nome
    
    caixa.appendChild(opcaonova)
    document.getElementById("aluno").value = ""
}