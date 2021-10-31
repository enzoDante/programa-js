function verificar(){
    var data = new Date()
    data = data.getFullYear()

    var fano = document.getElementById("txtano")
    var res = document.getElementById("res")
    if(fano.value.length == 0 || Number(fano.value) > data){
        alert("Digite um ano válido!")

    }else{
        var fsex = document.getElementsByName("radsex")
        var idade = data - Number(fano.value)
        var genero = ''

        var img = document.createElement("img")
        img.setAttribute("id", 'foto')
        //aqui é a mesma coisa q <img src="" id="foto">
        //está criando a tag e guardando na variável
        //ao invés de mostrar no html


        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'bebe-m.jpg')
                //img.style.height = '5em'

            }else if(idade < 21){
                img.setAttribute("src", "jovem-m.jpg")
            }else if(idade < 50){
                img.setAttribute("src", "adulto-m.jpg")
            }else{
                img.setAttribute("src", "idoso-m.jpg")
            }

        }else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                img.setAttribute("src", "bebe-f.jpg")
            }else if(idade < 21){
                img.setAttribute("src", "jovem-f.jpg")
            }else if(idade < 50){
                img.setAttribute("src", "adulto-f.jpg")
            }else{
                img.setAttribute("src", "idoso-f.jpg")
            }

        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.<br>`
        res.appendChild(img)
    }
}