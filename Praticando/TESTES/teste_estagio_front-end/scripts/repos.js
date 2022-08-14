function Getrepo(re){
    //permite o uso da api
    let request = new XMLHttpRequest()
    request.open("GET", re, false)
    request.send()
    return request.responseText

}
function mostrarRep(repositorio){
    //criando div para cada repositório
    let div = document.createElement("div")
    div.setAttribute("class", "caixa-repos")

    //nome do projeto com link para a página do repositório
    let nome = document.createElement("a")
    nome.setAttribute("class", "linkgithub")
    nome.setAttribute("href", repositorio.html_url)
    nome.setAttribute("target", "_blank")
    let strong = document.createElement("strong")
    strong.innerHTML = repositorio.name
    nome.appendChild(strong)
    div.appendChild(nome)

    //caso tenha descrição, irá ser adicionada
    let descricao = document.createElement("p")
    descricao.innerHTML = repositorio.description
    div.appendChild(descricao)

    //adicionando a data de criação do repositório
    let data = document.createElement("p")
    data.innerHTML = 'Data de criação: '
    strong = document.createElement("strong")

    //formato brasileiro da data de criação
    strong.innerHTML = Intl.DateTimeFormat('pt-BR').format(new Date(repositorio.created_at))
    data.appendChild(strong)
    div.appendChild(data)
    
    //retornando a div com um repositório
    return div
    
}
function repos(repo){
    //repo é a url passada como parâmentro do arquivo perfil.js
    let data = Getrepo(repo)
    let repositorios = JSON.parse(data)
    //recebendo a div onde irá aparecer os repositórios
    let div = document.getElementById("repositorios")
    div.innerHTML = ''
    /*se existe repositório, irá percorrer por todos eles adicionando em uma div e retornando para mostrarrep e adicionando para a div principal*/
    if(repositorios){
        repositorios.forEach(element => {
            let mostrarep = mostrarRep(element)
            div.appendChild(mostrarep)
        });
    }else{
        alert("Este usuário não possui um repositório!")
    }
}