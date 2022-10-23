//const testar = require('./verificaremail')
let nome="", email="", senha="", csenha=""
function validar(e){
    e.preventDefault()
    form = document.getElementById("ff")

    let n = nomee(1)
    let l = emaill(1)
    let s = senhaa(1)
    let c = csenhaa(1)

    if(n && l && s && c){
        let ver = em(email)
        if(ver != ""){
            document.getElementById("ee").style.display = 'block'
            document.getElementById("ee").innerHTML = ver
        }else{
            document.getElementById("ee").style.display = 'none'
            form.submit()
        }
    }else{
        console.log("valores inválidos")
    }

}

function nomee(v){
    nome = document.getElementById("nome").value 
    if(nome == "" || nome.length < 5){
        document.getElementById("nn").style.display = 'block'
        if(v==1)
            return false
    }else{
        document.getElementById("nn").style.display = 'none'
        if(v==1)
            return true
    }

}
function emaill(v){
    document.getElementById("ee").style.display = 'none'
    email = document.getElementById("email").value 
    if(email == "" || email.length < 5){
        document.getElementById("ee").style.display = 'block'
        document.getElementById("ee").innerHTML = "Digite um email corretamente"
        if(v==1)
            return false
    }else{
        if(email.indexOf('@') < 0 || email.indexOf('.com') < 0 || email.indexOf('@.com') > 0){
            document.getElementById("ee").style.display = 'block'
            document.getElementById("ee").innerHTML = "Digite corretamente!"
            if(v==1)
                return false
        }else{
            document.getElementById("ee").style.display = 'none'
            let ver = em(email)
            if(ver != ""){
                document.getElementById("ee").style.display = 'block'
                document.getElementById("ee").innerHTML = ver
            }else
                document.getElementById("ee").style.display = "none"

            if(v==1)
                return true
        }
    }

}

function senhaa(v){
    senha = document.getElementById("senha").value
    if(senha == "" || senha.length < 3){
        document.getElementById("ss").style.display = 'block'
        if(v==1)
            return false
    }else{
        document.getElementById("ss").style.display = 'none'
        if(v==1)
            return true
    }
    if(senha == csenha)
        document.getElementById("cc").style.display = 'none'
}
function csenhaa(v){
    csenha = document.getElementById("csenha").value 
    if(csenha == "" || csenha != senha){
        document.getElementById("cc").style.display = 'block'
        if(v==1)
            return false
    }else{
        document.getElementById("cc").style.display = 'none'
        if(v==1)
            return true
    }

}
//==========login==========
function emaillogin(v){
    document.getElementById("ee").style.display = 'none'
    email = document.getElementById("email").value 
    let ver = em(email)
    if(ver != ""){
        document.getElementById("ee").style.display = "none"
        if(v==1)
            return true
    }else{
        document.getElementById("ee").style.display = 'block'
        document.getElementById("ee").innerHTML = "Email inexistente!"
        if(v==1)
            return false
    }

    
        
    
}
function logar(e){
    e.preventDefault()
    let form = document.getElementById("ff")

    let emm = emaillogin(1)
    let sss = senhaa(1)
    if(emm && sss){
        form.submit()
        console.log("Login será efetuado")
    }else{
        console.log('informações incompletas')
    }

}