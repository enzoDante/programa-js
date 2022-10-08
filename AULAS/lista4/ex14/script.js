function calc(){
    let tab = document.getElementById("tabela")
    tab.innerHTML = ""

    let total = document.getElementById("nte").value 
    let brancos = document.getElementById("vbranco").value 
    let nulos = document.getElementById("vnulo").value 
    let validos = document.getElementById("vvalido").value 

    let percb = brancos/total*100
    let percn = nulos/total*100
    let percv = validos/total*100
    tab.innerHTML = `Percentual de votos brancos: ${percb}%`
    tab.innerHTML += `<br>Percentual de votos nulos: ${percn}%`
    tab.innerHTML += `<br>Percentual de votos válidos: ${percv}%`
}