function contar(){
    var res = document.getElementById("res")

    var inicio = parseInt(document.getElementById("inicio").value)
    var fim = parseInt(document.getElementById("fim").value)
    var passo = parseInt(document.getElementById("passo").value)

    if(isNaN(passo) || passo <= 0){
        passo = 1
    }
    if(isNaN(inicio) || isNaN(fim)){
        res.innerHTML = `Impossível contar!`
        //alert("preencha os campos corretamente!")
    }
    else{
        res.innerHTML = `<p>Contando:</p><br>`
        if(inicio < fim){//-----------------contagem progressiva!
            for(var x = inicio; x <= fim; x += passo){
                res.innerHTML += `${x} &#x1F449;`
            }
        }else{//----------------------------contagem regressiva!
            for(x = inicio; x >= fim; x -= passo){
                res.innerHTML += `${x} &#x1F449`
            }
        }
        res.innerHTML += `&#x1F3C1`

        document.getElementById("inicio").value = ""
        document.getElementById("fim").value = ""
        document.getElementById("passo").value = ""

    }
}