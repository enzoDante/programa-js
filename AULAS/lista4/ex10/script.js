function area(){
    let alt = document.getElementById("altura").value 
    let base = document.getElementById("base").value 
    let tab = document.getElementById("tabela")
    tab.innerHTML = ""

    let area = alt * base
    tab.innerHTML = `Área do elemento = ${area}`
}