let valores = Array()
function ver(){
    let num = document.getElementById("num").value 
    valores.push(num)

    let tabela = document.getElementById("tabela")
    tabela.innerHTML = ""

    let p = document.createElement("p")
    
    if(valores.length - 2 >= 0)
        p.innerHTML = valores[valores.length - 2]
    else
        p.innerHTML = "não existe valor anterior ao digitado!"
    tabela.appendChild(p)
}