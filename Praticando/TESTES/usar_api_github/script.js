//conquista maravilhosa amo javascript
function fazGet(url){
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}
function crialinha(usuario){
    linha = document.createElement("div")
    divId = document.createElement("p")
    divNome = document.createElement("p")
    divId.innerHTML = usuario.id 
    divNome.innerHTML = usuario.login

    linha.appendChild(divId)
    linha.appendChild(divNome)

    return linha
}
function main(user){
    //console.log(fazGet("https://api.github.com/users/"+user))
    let data = fazGet("https://api.github.com/users/"+user)
    let usuarios = JSON.parse(data)
    let divs = document.getElementById("div");
    let linha = crialinha(usuarios)
    divs.appendChild(linha)
    /*usuarios.forEach(element => {
        let linha = crialinha(element)
        divs.appendChild(linha)
    });*/
}
let user = "github"
main(user)