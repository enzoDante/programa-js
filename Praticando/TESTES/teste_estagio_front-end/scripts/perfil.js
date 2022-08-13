function fazGet(url){
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}
function mostrarPerfil(usuario){
    let div = document.createElement("div")
    div.setAttribute("id", "caixa-perfil")
    if(usuario.name){    
        let nome = document.createElement("a")
        nome.setAttribute("class", "linkgithub")
        let email = document.createElement("p")
        let bio = document.createElement("p")
        bio.setAttribute("id", "bio")
        let img = document.createElement("img")
    
        nome.innerHTML = usuario.login+"  "+usuario.name
        nome.setAttribute("href", usuario.html_url)
        nome.setAttribute("target", "_blank")
        email.innerHTML = usuario.email
        bio.innerHTML = usuario.bio
    
        let imgDiv = document.createElement("div")
        imgDiv.setAttribute("id", "imgPerfil")
        img.setAttribute("src", usuario.avatar_url)
        imgDiv.appendChild(img)
    
        //verificar o localstorage!!!!
        let favoritar = document.createElement("a")
        favoritar.setAttribute("onclick", "favoritos('"+usuario.login+"', 's')")
        favoritar.setAttribute("class", "favoritos")
        let fav = document.createElement("img")
        //se n ter favoritado ficara com estrela normal
        let star = ""
        if(!localStorage.getItem(usuario.login)){
            star = "imagens/estrela.png"
        }else{
            star = "imagens/estrela_amarela.png"
        }
        fav.setAttribute("src", star)
        favoritar.appendChild(fav)

        div.appendChild(imgDiv)
        div.appendChild(nome)
        div.appendChild(email)
        div.appendChild(favoritar)
        div.appendChild(bio)
    }else{
        let div = ''
        return div
    }
    return div
    //favoritar farei mais tarde!!!
    //let favoritar = document.createElement("a")
    //favoritar.setAttribute("id", "favoritos")

}
function buscar(){
    let user = document.getElementById("perfilBuscar").value
    if(user != ''){
        let data = fazGet("https://api.github.com/users/" + user)
        let usuario = JSON.parse(data)
        
        let perfil = document.getElementById("perfil")
        let mostrar = mostrarPerfil(usuario)
        perfil.innerHTML = ""
        if(mostrar != ''){
            perfil.style.display = "block"
            perfil.appendChild(mostrar)
            //repositório em outro arquivo
            repos(usuario.repos_url)
        }else{
            perfil.style.display = 'none'
            alert("Usuário não encontrado ou inexistente!\nverifique se digitou o login corretamente!")
            document.getElementById("perfilBuscar").value = ''
            document.getElementById("repositorios").innerHTML = ''
        }
    }else{
        alert("Campo vazio!")
    }

}

//verifica se usuário pressionou a tecla enter
function enter(e){
    if(e.key === "Enter"){
        buscar()
    }
}