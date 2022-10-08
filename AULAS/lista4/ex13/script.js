function carregarmult(){
    let tab = document.getElementById("tabela")
    tab.innerHTML = ""
    for(let i = 0; i < 7000; i++){
        let num = 7 * i
        if(num >= 7000)
            break
        tab.innerHTML += `7 x ${i} = ${num}<br>`

    }
}