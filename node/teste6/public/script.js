function fazGet(url){
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function carregar(){
    let data = fazGet("http://localhost:8081/outro")
    let valores = JSON.parse(data)
    console.log(valores)
    valores.forEach(element => {
        console.log(element)
    });

}

function testar(){
    console.log('um teste 1 ')
    alert('test')
}