let posicao = localStorage.getItem('posicaoScroll')
//Se existir uma opção salva seta o scroll nela
if(posicao){
    //Timeout necessário para funcionar no Chrome
    setTimeout(function(){
        //window.scrollTo(0, posicao)
        //document.getElementById("testando").innerHTML.scrollTo(0, posicao)
        //document.getElementById("testando").scrollTo(0, posicao)
        //document.getElementById("testando").scrollIntoView(posicao);
    }, 1)
}
//Verifica mudanças no Scroll e salva no localStorage a posição
window.onscroll = function(e){
    //posicao = document.getElementById("testando").scrollY
    posicao = window.scrollY
    localStorage.setItem('posicaoScroll', JSON.stringify(posicao))
}
