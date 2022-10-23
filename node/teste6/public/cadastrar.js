function criar(e){
    e.preventDefault()
    let form = document.getElementById("x")

    let nome = document.getElementById("nome").value 
    let senha = document.getElementById("senha").value 
    let email = document.getElementById("email").value 

    if(nome != "" && email != "" && senha != "")
        form.submit()
    else
        alert("ta vazio")

}
function logar(e){
    e.preventDefault()
    let form = document.getElementById("x")

    let nome = document.getElementById("nome").value 
    let senha = document.getElementById("senha").value

    if(nome != "" && senha != "")
        form.submit()
    else
        alert("ta vazio")

}