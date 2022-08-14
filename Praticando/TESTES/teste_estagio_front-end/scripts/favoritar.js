function favoritos(login, pagina){
    //login do usuário será salvo no localstorage caso não exista no localstorage
    if(!localStorage.getItem(login)){
        localStorage.setItem(login, login)
    }else{
        //se ja existe, irá remover do localstorage (removendo o favorito)
        localStorage.removeItem(login)
    }

    //verifica qual arquivo js está fazendo uso deste arquivo
    if(pagina == 's'){
        //caso seja o arquivo perfil.js, irá "recarregar a página" dando a impressão de favoritar o perfil
        //alterando a estrela de favorito
        buscar()
    }else{
        //caso seja o perfisFav.js, irá recarregar a página
        document.location.reload(true)
    }
}