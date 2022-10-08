function calc(){
    let tab = document.getElementById("tabela")
    tab.innerHTML = ""
    let salario = Number(document.getElementById("salario").value) 
    let re = Number(document.getElementById("pr").value) 

    let novo = Number((salario * re)/100)
    novo = salario + novo
    tab.innerHTML = `Reajuste feito!!! R$ ${novo}`
}