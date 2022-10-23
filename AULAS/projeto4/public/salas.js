function salaexistente(nome, form){
    let data = fazGet("http://localhost:8081/salaexiste/"+nome)
    console.log(data)
    if(data == ""){
        form.submit()
    }else{
        document.getElementById("mm").style.display = 'block'
        document.getElementById("mm").innerHTML = "Sala existente, digite outro nome!"
    }
}

function ordemsalas(el){
    let h3 = document.createElement("h3")
    let a1 = document.createElement("a")
    a1.setAttribute("class", 'sala')
    a1.innerHTML = `${el.nomes} |`
    a1.href = `/chat/${el.id_sala}`
    
    let a2 = document.createElement("a")
    a2.innerHTML = "Sair"
    a2.href = `/sairchat/${el.id_sala}`

    h3.appendChild(a1)
    h3.appendChild(a2)
    return h3

}
function carregarsalas(){
    let data = fazGet("http://localhost:8081/minhassalas")
    console.log(data)
    let valores = JSON.parse(data)

    let salas = document.getElementById("salas")

    if(valores){
        valores.forEach(element => {
            let div = ordemsalas(element)
            salas.appendChild(div)
        });
    }
}

//=======procurar sala========
function procurar(){
    let sala = document.getElementById("sa").value 
    let data = fazGet("http://localhost:8081/procurarSalaC/"+sala)
    console.log(data)
    let salasbusca = document.getElementById("salasbusca")
    salasbusca.innerHTML = ""

    let valores = JSON.parse(data)
    if(valores){
        valores.forEach(el => {
            let h3 = document.createElement("h3")
            let a1 = document.createElement("a")
            a1.innerHTML = el.nomes + " | entrar"
            a1.href = `/entrarSala/${el.id_sala}`
            h3.appendChild(a1)

            salasbusca.appendChild(h3)
        })
    }
}