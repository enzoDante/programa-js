var res = document.getElementById("res")

function fatorial(){
    let num = parseInt(document.getElementById("num").value)
    //fat de 5 = 5*4*3*2*1
    if(isNaN(num) || num <= 0){
        res.innerHTML = `<p>Digite um número válido no campo acima!!!</p>`
        document.getElementById("num").value = ''
        document.getElementById("num").focus()
    }
    else{
        res.innerHTML = `<p>Fatorial de ${num} é:</p>`
        let x = num
        let r = 1
        res.innerHTML += `<p>`
        for(let i = 1; i <= x; i++){
            r *= i
            //alert("res é "+r)
            res.innerHTML += ` ${r}`
        }
        res.innerHTML += `</p>`
        document.getElementById("num").value = ''
        document.getElementById("num").focus()
    }
}

function somatorio(){
    let num = parseInt(document.getElementById("num").value)
    if(isNaN(num) || num <= 0){
        res.innerHTML = `<p>Digite um número válido no campo acima!!!</p>`
        document.getElementById("num").value = ''
        document.getElementById("num").focus()

    }else{
        res.innerHTML = "<p>Somatório de "+num+" é:</p>"
        let x = num
        let r = 0
        res.innerHTML += `<p>`
        for(let i = 1; i <= x; i++){
            r += i
            res.innerHTML += ` ${r}`
        }
        res.innerHTML += `</p>`
        document.getElementById("num").value = ''
        document.getElementById("num").focus()
    }
}

function exp(){
    let num = parseInt(document.getElementById("num").value)
    let exp = parseInt(document.getElementById("opcional").value)

    if(isNaN(num) || isNaN(exp) || num < 0 || exp < 0){
        res.innerHTML = `Digite um número nos campos acima!!!`
        document.getElementById("opcional").focus()

    }else{
        res.innerHTML = `<p>${num} elevado a ${exp} é igual a:</p>`

        let r = 1
        for(let x = 1; x <= exp; x++){
            r *= num
        }
        res.innerHTML += `<p>${r}</p>`
        document.getElementById("num").value = ''
        document.getElementById("num").focus()

        document.getElementById("opcional").value = ''
    }
}
function tabuada(){
    let num = parseInt(document.getElementById("num").value)

    let item = document.createElement("select")
    item.setAttribute("size","10")
    item.style.fontSize = '1em'
    
    if(isNaN(num)){
        res.innerHTML = `Digite um número válido!`
        document.getElementById("num").value = ''
        document.getElementById("num").focus()
    }else{

        res.innerHTML = ''
        res.appendChild(item)
        for(let x = 1; x <= 10; x++){
            let op = document.createElement("option")
            op.text = `${num} x ${x} = ${num*x}`
            op.value = `t${x}`
            item.appendChild(op)
        }

        document.getElementById("num").value = ''
        document.getElementById("num").focus()

    }
}