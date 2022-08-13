function Getrepo(re){
    let request = new XMLHttpRequest()
    request.open("GET", re, false)
    request.send()
    return request.responseText

}
function mostrarRep(repositorio){
    
    let div = document.createElement("div")
    div.setAttribute("class", "caixa-repos")
    
    let nome = document.createElement("a")
    nome.setAttribute("class", "linkgithub")
    nome.setAttribute("href", repositorio.html_url)
    nome.setAttribute("target", "_blank")
    let strong = document.createElement("strong")
    strong.innerHTML = repositorio.name
    nome.appendChild(strong)
    div.appendChild(nome)

    let descricao = document.createElement("p")
    descricao.innerHTML = repositorio.description
    div.appendChild(descricao)

    let data = document.createElement("p")
    data.innerHTML = 'Data de criação: '
    strong = document.createElement("strong")
    strong.innerHTML = Intl.DateTimeFormat('pt-BR').format(new Date(repositorio.created_at))
    data.appendChild(strong)
    div.appendChild(data)

    return div
    
}
function repos(repo){
    let data = Getrepo(repo)

    let repositorios = JSON.parse(data)
    let div = document.getElementById("repositorios")
    div.innerHTML = ''
    if(repositorios){
        repositorios.forEach(element => {
            let mostrarep = mostrarRep(element)
            div.appendChild(mostrarep)
        });
    }else{
        alert("Este usuário não possui um repositório!")
    }
}