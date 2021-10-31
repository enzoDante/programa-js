function tabuada(){
    var insira = document.getElementById("insiranum")
    
    var num = Number(document.getElementById("num").value)
    var tab = document.getElementById("seltabuada")

    if(isNaN(num) || num == ""){
        insira.innerHTML = "Digite um número acima!"
    }
    else{
        tab.innerHTML = ""
        for(var x = 0; x <= 10; x++){
            let item = document.createElement("option")
            item.text = `${num} x ${x} = ${num*x}`
            item.value = `tab${x}`//isso serve p outras linguagens!

            tab.appendChild(item)
        }
        document.getElementById("num").value = ""
        insira.innerHTML = ""
    }

}