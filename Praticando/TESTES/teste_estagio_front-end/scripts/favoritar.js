function favoritos(login, pagina){
    if(!localStorage.getItem(login)){
        localStorage.setItem(login, login)
    }else{
        localStorage.removeItem(login)
    }

    if(pagina == 's'){
        buscar()
    }else{
        document.location.reload(true)
    }
    /*else{
        buscarTodos()
    } */
}