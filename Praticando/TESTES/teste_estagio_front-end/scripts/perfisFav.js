function fazGet(re){
    //permite o usu da api
    let request = new XMLHttpRequest()
    request.open("GET", re, false)
    request.send()
    return request.responseText
}
function mostrarP(usuario){
    /*está adicionando os perfis favoritados, igual o arquivo perfil.js, porém, como pode ser mais de um perfil, irá funcionar como o arquivo repos.js, usando o foreach*/
    let div = document.createElement("div")
    div.setAttribute("class", "caixa-perfis")

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

    
    let favoritar = document.createElement("a")
    favoritar.setAttribute("onclick", "favoritos('"+usuario.login+"', 'f')")
    favoritar.setAttribute("class", "favoritos")
    let fav = document.createElement("img")
    
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

    return div
}
function buscarTodos(){
    //recebendo todos os valores do locastorage
    const keys = Object.keys(localStorage);
    console.log(keys);

    //div onde irá aparecer todos os perfis
    let perfis = document.getElementById("perfils")
    if(keys != ''){

        //verifica se existe elementos e percorrerá por todos os login
        keys.forEach(element =>{
            
            //fazendo a requisição de cada url dos perfis favoritados
            let data = fazGet("https://api.github.com/users/" + element)
            let usuario = JSON.parse(data)

            //funciona como o arquivo repos.js
            let mostrar = mostrarP(usuario)
            perfis.appendChild(mostrar)

            console.log(element)
        })
    }else{
        let msg = document.createElement("h2")
        msg.innerHTML = "Você não favoritou nenhum perfil!"
        perfis.appendChild(msg)
    }
    
}

buscarTodos()