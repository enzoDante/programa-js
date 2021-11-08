function cad(e){
    if(e.keyCode === 13){
        //e.preventDefault()
        cadastro()
    }
}

function cadastro(){
    var div = document.getElementById("div")
    var h1 = document.createElement("h1")

    var nome = document.getElementById("nome").value 
    var email = document.getElementById("email").value 
    var senha = document.getElementById("senha").value 
    var senhar = document.getElementById("senhar").value 

    if(nome == '' || email == '' || senha == '' || senhar == '' || senha != senhar){
        h1.innerHTML = `preencha o formulário corretamente!!!`
    }else{
        if(email.indexOf('@') === -1 || email.indexOf('.com') === -1 || email.indexOf('@.com')!== -1 || email.indexOf(' ') !== -1){
            h1.innerHTML = `Digite o email corretamente!`
        }
        else{
            h1.innerHTML = `Cadastrado!`
        }
    }

    div.innerHTML = ''

    div.appendChild(h1)
    setTimeout(function(){div.innerHTML = ''}, 2000)
}
