let num = document.querySelector("input#num")
let lista = document.querySelector("select#lista")
let res = document.querySelector("div#res")

let valores = []


function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }

}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }
    else{
        return false
    }
}


function analisar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement("option")
        item.text = `Valor ${num.value} adicionado!`
        //item.value = `op`
        lista.appendChild(item)
        res.innerHTML = ''


        document.getElementById("num").value = ""
        num.focus()//faz o cursor piscar no input!!!
    }else{
        alert("valor inválido ou ja encontrado na lista!!!")
        num.value = ""
        num.focus()
    }
}

function finalizar(){
    if(valores.length == 0){
        alert("adicione valores antes de finalizar!")
    }else{
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for(let p in valores){
            soma += valores[p]


            if(valores[p] > maior)
                maior = valores[p]
            if(valores[p] < menor)
                menor = valores[p]
        }

        media = soma / total


        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${total} números cadastrados</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}</p>`

    }
}