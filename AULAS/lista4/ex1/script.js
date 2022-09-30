function tab(){
    let lab = document.getElementById("labe")
    let num = document.getElementById("num").value
    let div = document.getElementById("tabela")

    if(document.getElementById("validar").checked && num != ''){
        //div.parentNode.outerHTML = ""
        div.innerHTML = ""
        lab.style.color = 'white'
        lab.innerHTML = "Deseja calcular tabuada?"

        let p = document.createElement("p")
        for(let i = 0; i <= 10; i++){
            p.innerHTML += `${num} x ${i} = ${num*i}<br>`
        }
        div.appendChild(p)

    }else{        
        lab.style.color = 'red'
        lab.innerHTML = "Confirme para calcular ou insira um valor!!"
    }
}