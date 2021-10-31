function listarfilmetela(filme){//procedimento chamado
    var listaf = document.querySelector("#listafilme")//irá receber o elemento
    //onde ficará as imagens
    var elementofilme = "<img src="+filme+">"//html com imagem

    listaf.innerHTML = listaf.innerHTML + elementofilme
    //imagens adicionadas por causa do innerHTML, permite coisas de html
    //com ele pode adicionar qualquer coisa de html
}

function adicionarFilme(){
    var res = document.getElementById("resultado")

    var campofilme = document.querySelector("#filme").value
    //irá pegar o que foi digitado pelo usuário
    if(campofilme.endsWith('.jpg')){//verifica se termina com '.jpg'
        listarfilmetela(campofilme)//irá chamar o procedimento
        res.innerHTML = ""//deixa o elemento vazio(uma coisa q modifiquei!)
    }
    else{
        listarfilmetela(campofilme)//outra coisa q modifiquei
        alert("Imagem Inválida!")//avisa q n permite imagem sem '.jpg'
        res.innerHTML = "Apesar de ser inválido, a imagem irá aparecer!"
        //mostra mensagem no elemento
        //atenção nesse '.innerHTML' -- ele irá permitir adicionar coisas html
    }
    document.getElementById("filme").value = ""
    //deixará o campo vazio após apertar o botão

}

/*
https://upload.wikimedia.org/wikipedia/pt/7/79/Yesterday_%282019%29_poster.jpg

https://1.bp.blogspot.com/-ImZPRqLsluE/WFK156_6pNI/AAAAAAAAYBY/0lEhNRF5wfQdLfr6hpT57_Jt2eBrE9H5wCLcB/s1600/arrival-kartoun-desert.jpg

https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/91/90/98/20169244.jpg
*/