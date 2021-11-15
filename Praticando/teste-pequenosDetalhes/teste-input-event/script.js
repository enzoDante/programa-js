//----onchange----
function mudou(){
    var texto = document.getElementById("texto")
    var p = document.getElementsByTagName("p")[0]
    p.innerHTML = 'mudou e evento acontece ao sair do input ou ao apertar enter! texto = '+texto.value
    texto.value = ''
}
//----onfocus e onblur----
function foco(){
    let p = document.getElementsByTagName("p")[1]
    p.innerHTML = 'no momento em que clicou no input, isso aparece =)'
}
function blurr(){
    let texto2 = document.getElementById("texto2")
    let p = document.getElementsByTagName("p")[1]
    p.innerHTML = `no momento em que sair do foco isso aparece, texto = ${texto2.value}`
    texto2.value = ''
}
//----onkeypress----
function enter(e){
    let p = document.getElementsByTagName("p")[2]
    if(e.keyCode === 13){
        let texto3 = document.getElementById("texto3")
        p.innerHTML = `A tecla enter foi pressionada! texto = ${texto3.value}`
        texto3.value = ''
    }
}
//----onclick para radio----
function enviar(){
    let p = document.getElementsByTagName("p")[3]
    let r = document.getElementsByName("r")
    let l = document.getElementsByClassName("ll")
    for(let i = 0; i < r.length; i++){
        if(r[i].checked == true){
            p.innerHTML = `valor checked = ${l[i].innerHTML}`
        }
    }
}
//----onclick para checkbox----
function enviar2(){
    let p = document.getElementsByTagName("p")[4]
    let cb1 = document.getElementById("b1")
    let cb2 = document.getElementById("b2")
    let l2 = document.getElementsByClassName("ll2")
    p.innerHTML = 'caixas marcadas:'

    if(cb1.checked == true && cb2.checked == true){
        for(let i = 0; i < l2.length; i++){
            p.innerHTML += `${l2[i].innerHTML} `
        }
    }else{
        if(cb1.checked == true){
            p.innerHTML += `${l2[0].innerHTML}`
        }
        if(cb2.checked == true){
            p.innerHTML += `${l2[1].innerHTML}`
        }
    }
}
//----onchange e onclick para select----

let se = document.getElementById("sele")
function mudoo(){
    let p = document.getElementsByTagName("p")[5]
    p.innerHTML = `Opção selecionada onchange: ${se[se.selectedIndex].text}`
}

function enviar3(){
    let p = document.getElementsByTagName("p")[5]
    //alert(se[1].innerHTML)
    //alert(se.options[selectedIndex].innerHTML)
    //alert(se[se.selectedIndex].text)

    let selecionado = se[se.selectedIndex].text
    p.innerHTML = `Opção selecionada onclick: ${selecionado}`

}