function em(email){
    let data = fazGet("http://localhost:8081/email/"+ email)
    console.log(data)
    if(data != ""){
        let valores = JSON.parse(data)
        // console.log(valores.id_usu)
        return "Email existente!"
    }
    return ""
}