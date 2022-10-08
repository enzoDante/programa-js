let num1 = ""
let num2 = ""
let valor1 = true
let resposta = false
let sinal
let tab = document.getElementById("tabela")
function novovalor(){
    if(resposta){
        num1 = ""
        num2 = ""
        tab.innerHTML = ""
        resposta = false
    }
}

function n0(){
    novovalor()
    if(valor1){
        if(num1 != ""){
            num1 += "0"
            tab.innerHTML += "0"
        }
    }else{
        if(num2 != ""){
            num2 += "0"
            tab.innerHTML += "0"
        }
    }
}
function n1(){
    novovalor()
    if(valor1){
        num1 += "1"
        tab.innerHTML += "1"
    }else{
        num2 += "1"
        tab.innerHTML += "1"
    }
}
function n2(){
    novovalor()
    if(valor1){
        num1 += "2"
        tab.innerHTML += "2"
    }else{
        num2 += "2"
        tab.innerHTML += "2"
    }
}
function n3(){
    novovalor()
    if(valor1){
        num1 += "3"
        tab.innerHTML += "3"
    }else{
        num2 += "3"
        tab.innerHTML += "3"
    }
}
function n4(){
    novovalor()
    if(valor1){
        num1 += "4"
        tab.innerHTML += "4"
    }else{
        num2 += "4"
        tab.innerHTML += "4"
    }
}
function n5(){
    novovalor()
    if(valor1){
        num1 += "5"
        tab.innerHTML += "5"
    }else{
        num2 += "5"
        tab.innerHTML += "5"
    }
}
function n6(){
    novovalor()
    if(valor1){
        num1 += "6"
        tab.innerHTML += "6"
    }else{
        num2 += "6"
        tab.innerHTML += "6"
    }
}
function n7(){
    novovalor()
    if(valor1){
        num1 += "7"
        tab.innerHTML += "7"
    }else{
        num2 += "7"
        tab.innerHTML += "7"
    }
}
function n8(){
    novovalor()
    if(valor1){
        num1 += "8"
        tab.innerHTML += "8"
    }else{
        num2 += "8"
        tab.innerHTML += "8"
    }
}
function n9(){
    novovalor()
    if(valor1){
        num1 += "9"
        tab.innerHTML += "9"
    }else{
        num2 += "9"
        tab.innerHTML += "9"
    }
}
//operadores
function menos(){
    if(valor1){
        console.log(num1)
        num1 = Number(num1)
        console.log(num1)
        valor1 = false
        sinal = 0
        tab.innerHTML += "-"
    }
}
function mais(){
    if(valor1){
        num1 = Number(num1)
        valor1 = false
        sinal = 1
        tab.innerHTML += "+"
    }
}
function multiplicar(){
    if(valor1){
        num1 = Number(num1)
        valor1 = false
        sinal = 2
        tab.innerHTML += "x"
    }
}
function dividir(){
    if(valor1){
        num1 = Number(num1)
        valor1 = false
        sinal = 3
        tab.innerHTML += "/"
    }
}

function resp(){
    resposta = true
    valor1 = true
    
    num2 = Number(num2)
    let resp

    if(sinal == 0){
        resp = num1 - num2
        console.log(num1)
        console.log(num2)
    }else{
        if(sinal == 1){
            resp = num1 + num2
        }else{
            if(sinal == 2){
                resp = num1*num2
            }else{
                resp = num1 / num2
            }
        }
    }
    tab.innerHTML = resp
}