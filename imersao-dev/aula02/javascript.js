function Chutar(){
    var x = parseInt(Math.random() * 11);
    var chute = parseInt(document.getElementById("valor").value)
    var texto = document.getElementById("resultado")

    if(chute == x){
        texto.innerHTML = "Parabéns, você adivinhou o número! " + chute
    }
    else if(chute < 0 || chute > 10){
        texto.innerHTML = "Você deve digitar um número entre 0 e 10!"
    }
    else{
        texto.innerHTML = "Você não acertou!"
    }

}