function carregar(){
    var msg = document.getElementById("msg")
    var img = document.getElementById("imagem")
    var data = new Date()
    data = data.getHours()

    msg.innerHTML = `Agora são ${data} horas.`

    if(data >= 0 && data < 12){
        img.src = "dia-manha.jpg"
        document.body.style.backgroundColor = "#e2cd9f"

    }else if(data >= 12 && data <= 18){
        img.src = "dia-tarde.jpg"
        document.body.style.backgroundColor = "#b9846f"

    }else{
        img.src = "dia-noite.jpg"
        document.body.style.backgroundColor = "#515154"

    }
}