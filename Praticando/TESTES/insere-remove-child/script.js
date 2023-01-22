let id = 0
function add(){
    let main = document.getElementById("main")
    let ob = criarElement()   

    main.appendChild(ob)
}
// ============================

function addAntes(){
    // let main = document.getElementById("main")
    let main = document.getElementsByTagName("main")[0]
    let ob = criarElement()

    main.insertBefore(ob, main.children[0])
}
// ==========================
function criarElement(){
    let ob = document.createElement("div")
    // ob.setAttribute("class", 'teste')
    ob.className = "teste"
    ob.id = id
    ob.innerHTML = `texto ${id}`
    ob.addEventListener("click", () => {
        console.log(ob.id)
        // main.removeChild(ob)
        evento(main, ob) //funciona, mas n sei como o main é variável global
    })
    id++

    return ob
}
// ======= caso addeventlistener seja grande, eu posso separar assim
function evento(main, ob){
    main.removeChild(ob)

}