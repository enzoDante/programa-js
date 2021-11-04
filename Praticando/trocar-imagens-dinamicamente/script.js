var contador = 0

mudar()



function mudar(){
    var pontos = document.getElementsByClassName("ponto")
    var slides = document.getElementsByClassName("imgs")

    var i 
    for(i = 0; i < slides.length; i++){
        slides[i].style.display = 'none'
    }
    contador++
    if(contador > slides.length){contador = 1}
    slides[contador-1].style.display = 'block'

    for(i = 0; i < pontos.length; i++){
        pontos[i].className = pontos[i].className.replace(" active", "")
        //não sei pq precisa de espaço ali em active!!!
    }
    pontos[contador-1].className += " active"

    setTimeout(mudar, 2000)

}