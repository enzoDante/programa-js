var i = 1
var menu = document.getElementsByClassName("a")

function abrir(x){
    
    x.classList.toggle("change")
    for(let a = 0; a < menu.length; a++){

        menu[a].classList.toggle("teste")
    }


    /*if(i === 1){
        for(let controle = 0; controle < menu.length; controle++){
            menu[controle].style.display = 'block'
        }
        i++
    }else{
        for(let controle = 0; controle < menu.length; controle++){
            menu[controle].style.display = 'none'
        }
        i--
    }*/
}