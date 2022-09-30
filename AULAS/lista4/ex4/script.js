let tabela = document.getElementById("tabela")
let alunos = Array()
let media = Array()
function cad(){
    let nome = document.getElementById("nome").value 
    let nota1 = document.getElementById("nota1").value
    let nota2 = document.getElementById("nota2").value
    let nota3 = document.getElementById("nota3").value
    let nota4 = document.getElementById("nota4").value 

    let valor = validar(nome, nota1, nota2, nota3, nota4)
    if(valor == 0){
        alunos.push(nome)
        let nota = (nota1+nota2+nota3+nota4)/4
        media.push(nota)
        console.log(alunos)
        console.log(media)
    }

}
function validar(nome, n1,n2,n3,n4){
    let valido = 0
    //nome
    if(nome == ""){
        valido = 1
        document.getElementsByTagName("p")[0].style.color = "red"
        document.getElementsByTagName("p")[0].innerHTML = "Digite um nome"
        document.getElementById("nome").focus()
    }else
        document.getElementsByTagName("p")[0].innerHTML = ""
    //nota1
    if(n1 == "" || n1 < 0 || n1 > 10){
        valido = 1
        document.getElementsByTagName("p")[1].style.color = "red"
        document.getElementsByTagName("p")[1].innerHTML = "Digite uma nota válida"
        document.getElementById("nota1").focus()
    }else
        document.getElementsByTagName("p")[1].innerHTML = ""
    //nota2
    if(n2 == "" || n2 < 0 || n2 > 10){
        valido = 1
        document.getElementsByTagName("p")[2].style.color = "red"
        document.getElementsByTagName("p")[2].innerHTML = "Digite uma nota válida"
        document.getElementById("nota2").focus()
    }else
        document.getElementsByTagName("p")[2].innerHTML = ""
    //nota3
    if(n3 == "" || n3 < 0 || n3 > 10){
        valido = 1
        document.getElementsByTagName("p")[3].style.color = "red"
        document.getElementsByTagName("p")[3].innerHTML = "Digite uma nota válida"
        document.getElementById("nota3").focus()
    }else
        document.getElementsByTagName("p")[3].innerHTML = ""
    //nota4
    if(n4 == "" || n4 < 0 || n4 > 10){
        valido = 1
        document.getElementsByTagName("p")[4].style.color = "red"
        document.getElementsByTagName("p")[4].innerHTML = "Digite uma nota válida"
        document.getElementById("nota4").focus()
    }else
        document.getElementsByTagName("p")[4].innerHTML = ""
    
    return valido


}