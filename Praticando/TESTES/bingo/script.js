function carregar(){
    blocos(4)
}

function mudar(id){
    // let div = document.getElementById(id)
    let textarea
    if(document.getElementById(`text${id}`))
        textarea = document.getElementById(`text${id}`)
    else
        textarea = document.getElementById(`outro${id}`)

    console.log(textarea.readOnly)
    console.log('separa')
    if(textarea.readOnly){
        console.log(textarea.id)
        if(textarea.id == `outro${id}`){
            textarea.style.backgroundColor = "#313131"
            textarea.setAttribute("id", `text${id}`)
            // textarea.removeAttribute("readOnly")
            // textarea.setAttribute("readOnly", 1)
        }else{
            textarea.style.backgroundColor = "#45ac16"
            textarea.setAttribute("id", 'outro'+id)
            
            // textarea.removeAttribute("readOnly")
            // textarea.setAttribute("readOnly", 2)

        }
    }
}

function blocos(q){
    let main = document.getElementById("main")
    main.innerHTML = ''
    for(let i=1; i<=q*q; i++){
        
        let div = document.createElement("div")
        div.setAttribute("class", 'blocos')
        div.setAttribute("id", i)

        let input = document.createElement("textarea")
        input.setAttribute("class", 'blocosinput')
        input.setAttribute("id", `text${i}`)
        input.setAttribute("onclick", `mudar(${i})`)
        // input.setAttribute("disabled", true)
        input.setAttribute("readonly", 1)

        div.appendChild(input)
        main.appendChild(div)
        if(i == q || i == (q+q) || i == (q*3) || i == (q*4) || i == (q*5)){
            let br = document.createElement("br")
            main.appendChild(br)
        }
    }
}

function config(){
    let editar = document.getElementById("editar")

    let label = document.getElementById("leditar")
    let blocos = document.getElementsByClassName("blocosinput")

    if(editar.checked){
        
        for(let i = 0; i < blocos.length; i++){
            // console.log(blocos[i])
            blocos[i].removeAttribute("readonly")
        }
        // blocos.removeAttribute("disabled")

        label.style.backgroundColor = "#45ac16"
        label.innerHTML = "Parar de editar"
    }else{
        for(let i = 0; i < blocos.length; i++){
            blocos[i].setAttribute("readonly", 1)
        }
        // blocos.setAttribute("disabled", true)

        label.style.backgroundColor = "#181818"
        label.innerHTML = "Editar bingo"
    }
}