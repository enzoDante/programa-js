function carregar(e){
    let nome = document.getElementById("nome").value 
    let valor = document.getElementById("nota").value 

    const xhttp = new XMLHttpRequest()

    xhttp.onload = function(){
        let a = this.responseText
        console.log(a)
    }
    xhttp.open("POST", "../index.js", true)
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("nome="+nome+"&nota="+valor)
    e.preventDefault()
}