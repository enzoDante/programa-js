let nomes = Array()
function criar(){
    document.getElementById("p").innerHTML = ""
    let existe = 0
    let caixa = document.getElementById("selecionar")
    let nome = document.getElementById("aluno").value 
    
    nomes.forEach(x => {
        if(x == nome){
            existe = 1
        }
    })
    if(existe == 0 && nome != ""){
        nomes.push(nome)
    
        let opcaonova = document.createElement("option")
        opcaonova.innerHTML = nome
        
        caixa.appendChild(opcaonova)
        document.getElementById("aluno").value = ""
    }else{
        document.getElementById("p").innerHTML = "Digite outro nome!"
        document.getElementById("aluno").value = ""
        document.getElementById("aluno").focus()
    }
    existe = 0
}