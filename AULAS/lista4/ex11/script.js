function calcular(){
    let idade = document.getElementById("idade").value
    if(idade > 700){
        let ano = new Date()
        ano = ano.getFullYear()
        idade = ano - idade
        console.log(idade)
    }

    let tab = document.getElementById("tabela")
    tab.innerHTML = ""

    let dias = idade * 365
    let horas = dias * 24
    let minutos = horas * 60
    let seg = minutos * 60

    let p = document.createElement("p")
    p.innerHTML = `Dias vivido: ${dias}<br>Horas: ${horas}<br>Minutos: ${minutos}<br>Segundos:${seg}`

    tab.appendChild(p)
}