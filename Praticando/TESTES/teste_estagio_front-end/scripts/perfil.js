function fazGet(url){
    //permite o uso da api
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}
function mostrarPerfil(usuario){
    //criando os elementos com os dados de um usuário caso ele exista
    let div = document.createElement("div")
    div.setAttribute("id", "caixa-perfil")
    if(usuario.name){

        //nome e login do usuário e um link para sua página
        let nome = document.createElement("a")
        nome.setAttribute("class", "linkgithub")
        nome.innerHTML = usuario.login+"  "+usuario.name
        nome.setAttribute("href", usuario.html_url)
        nome.setAttribute("target", "_blank")

        //email e bio do usuário (só aparece se ele tiver esses dados!)
        let email = document.createElement("p")
        email.innerHTML = usuario.email
        
        let bio = document.createElement("p")
        bio.setAttribute("id", "bio")
        bio.innerHTML = usuario.bio

        //imagem de perfil do usuário
        let imgDiv = document.createElement("div")
        imgDiv.setAttribute("id", "imgPerfil")
        let img = document.createElement("img")
        img.setAttribute("src", usuario.avatar_url)
        imgDiv.appendChild(img)        
    
        /*criando um link para favoritar o perfil (irá guardar no localstorage e se apertar de novo irá remover do localstorage)*/
        let favoritar = document.createElement("a")
        favoritar.setAttribute("onclick", "favoritos('"+usuario.login+"', 's')")
        favoritar.setAttribute("class", "favoritos")
        let fav = document.createElement("img")

        //se não favoritou o perfil, ele ficara com estrela normal
        let star = ""
        if(!localStorage.getItem(usuario.login)){
            star = "imagens/estrela.png"
        }else{
            star = "imagens/estrela_amarela.png"
        }
        fav.setAttribute("src", star)
        favoritar.appendChild(fav)

        //adicionando todos os elementos criados em uma div para retornar e ser adicionada na tela
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

}
function buscar(){
    //recebendo o login do usuário
    let user = document.getElementById("perfilBuscar").value
    if(user != ''){

        //se não estiver vazio, irá fazer uso da api e retornar os dados do usuário
        let data = fazGet("https://api.github.com/users/" + user)
        let usuario = JSON.parse(data)

        //recebendo a div onde irá aparecer o perfil
        let perfil = document.getElementById("perfil")

        //função para adicionar todos os elementos do usuário
        let mostrar = mostrarPerfil(usuario)
        perfil.innerHTML = ""
        if(mostrar != ''){

            //se existe um usuário, irá mostra-lo na tela
            perfil.style.display = "block"
            perfil.appendChild(mostrar)

            //procedimento dos repositórios do usuário pesquisado
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