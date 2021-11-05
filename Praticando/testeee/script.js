var contador = 0

mostrar()

function mostrar(){
    var pontos = document.getElementsByClassName("bola")
    var slides = document.getElementsByClassName("imgs")
    var i
    for(i = 0; i < slides.length; i++){
        slides[i].style.display = "none"
    }
    contador++
    if(contador > slides.length){contador = 1}
    slides[contador-1].style.display = 'block'

    for(i = 0; i < pontos.length; i++){
        pontos[i].style.backgroundColor = '#ffffff'
    }
    pontos[contador-1].style.backgroundColor = '#535353'

    setTimeout(mostrar, 2000)
}
