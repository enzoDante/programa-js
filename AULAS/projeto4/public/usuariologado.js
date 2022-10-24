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
        //======opção de sair da conta e mostrar nome do usuario-=================
        let data = fazGet("http://localhost:8081/nome")
        console.log(data)
        let p = document.createElement("p")
        p.setAttribute("id", "nomeusu")
        p.innerHTML = data
        nav.appendChild(p)

        let a = document.createElement("a")
        a.href = "/sairDestroy"
        a.innerHTML = "Sair"
        a.setAttribute("id", "sair")
        // a.id = "sair"
        nav.appendChild(a)
        //=======================================opcao de criar sala=========
        let a2 = document.createElement("a")
        a2.href = "/criarSala"
        a2.innerHTML = "Criar sala"
        a2.setAttribute("id", "criarsala")
        nav.appendChild(a2)
        //=======================================opcao de procurar sala
        let a3 = document.createElement("a")
        a3.href = "/procurarSala"
        a3.innerHTML = "Buscar"
        a3.setAttribute("id", "buscarsala")
        nav.appendChild(a3)
        //===============================================

        let main = document.getElementById("main")
        main.style.textAlign = "left"
        //=======================================caso a página seja 'login'
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
            //=======================================caso seja página 'cadastro'
            if(v == "cadastro"){
                main.innerHTML = ""
                let h1 = document.createElement("h1")
                h1.innerHTML = "Você ja está logado! "

                let a = document.createElement("a")
                a.href = "/"
                a.innerHTML = "Voltar"
                h1.appendChild(a)
                main.appendChild(h1)
            }else{
                //=======================================págnia 'salas'
                if(v=='salas'){
                    document.getElementById("criarsala").style.display = "none"
                }else{
                    //=======================================página 'bsalas'
                    if(v== 'bsalas'){
                        document.getElementById("buscarsala").style.display = "none"
                    }else{
                        //=======================================página principal 'index'
                        if(v=='index'){
                            carregarsalas()
                        }
                    }
                }
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
        if(v=='index'){
            let aside = document.getElementById("servers")
            aside.innerHTML = ""

            let main = document.getElementById("main")
            main.style.textAlign = "center"
            main.innerHTML = ""
            let h1 = document.createElement("h1")
            h1.innerHTML = "Você não está logado! "

            let a = document.createElement("a")
            a.href = "/cadastro"
            a.innerHTML = "Criar conta"
            h1.appendChild(a)
            main.appendChild(h1)
        }else{
            if(v == 'salas'){
                let main = document.getElementById("main")
                main.style.textAlign = "center"
                main.innerHTML = ""
                let h1 = document.createElement("h1")
                h1.innerHTML = "Você não está logado! "
                let a = document.createElement("a")
                a.href = "/cadastro"
                a.innerHTML = "Criar conta"
                h1.appendChild(a)
                main.appendChild(h1)
            }else{
                if(v == 'bsalas'){
                    let main = document.getElementById("main")
                    main.style.textAlign = "center"
                    main.innerHTML = ""
                    let h1 = document.createElement("h1")
                    h1.innerHTML = "Você não está logado! "
                    let a = document.createElement("a")
                    a.href = "/cadastro"
                    a.innerHTML = "Criar conta"
                    h1.appendChild(a)
                    main.appendChild(h1)
                }
            }
        }
        // document.getElementById("sair").style.display = "none"
    }

}