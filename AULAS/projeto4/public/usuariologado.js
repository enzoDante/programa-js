function logado(v){
    let data = fazGet("http://localhost:8081/logado")
    console.log(data)
    //======usuario logado====================
    if(data != ""){
        let nav = document.getElementById("nav")
        let valores = document.getElementsByClassName("cadastrologin")
        console.log(valores)
        for(let i=0; i < valores.length; i++){
            valores[i].style.display = "none"
        }
        document.getElementsByClassName("cadastrologin")[0].style.display = "none"
        //======opção de sair da conta-=================
        let a = document.createElement("a")
        a.href = "/sairDestroy"
        a.innerHTML = "Sair"
        a.setAttribute("id", "sair")
        // a.id = "sair"
        nav.appendChild(a)
        //===============================================

        let main = document.getElementById("main")
        main.style.textAlign = "center"
        
        if(v == "login"){
            main.innerHTML = ""
            let h1 = document.createElement("h1")
            h1.innerHTML = "Você ja está logado! "

            let a = document.createElement("a")
            a.href = "/"
            a.innerHTML = "Voltar"
            h1.appendChild(a)
            main.appendChild(h1)
        }else{
            if(v == "cadastro"){
                main.innerHTML = ""
                let h1 = document.createElement("h1")
                h1.innerHTML = "Você ja está logado! "

                let a = document.createElement("a")
                a.href = "/"
                a.innerHTML = "Voltar"
                h1.appendChild(a)
                main.appendChild(h1)
            }
        }
    }
    //===================usuario não está logado--------------------
    else{
        let valores = document.getElementsByClassName("cadastrologin")
        console.log(valores)
        for(let i=0; i < valores.length; i++){
            valores[i].style.display = "inline-block"
        }
        // document.getElementById("sair").style.display = "none"
    }

}