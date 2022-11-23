let moveme = document.getElementById("mover"),
moverX = 0,
moverY = 0,
movX = 150,
movY = 150;

function moveStart(e){
    moverX = e.pageX - moveme.offsetLeft;
    moverY = e.pageY - moveme.offsetTop;

    addEventListener("mousemove", dragMove)
    addEventListener("mouseup", dragEnd)

}

function dragMove(e){
    moveme.style.left = (e.pageX - moverX) + 'px';
    moveme.style.top =  (e.pageY - moverY) + 'px';
}
function dragEnd(){
    removeEventListener("mousemove", dragMove)
    removeEventListener("mouseup", dragEnd)
}

moveme.addEventListener("mousedown", moveStart)
//========automático==============
var x = document.getElementById("mover2")
var mx = 0, my = 0
var ver = false, hor = false
var validar = 0, validary = 0
setInterval(testar, 100)
// testar()
function testar(){
    if(hor) mx -= 10
    else mx += 10
    if(ver) my -= 10
    else my += 10

    // validar = mx - movX
    // validary = my - movY
    // if(validar < 0) validar *= -1
    // console.log(validar)
    // if(validar <= 100 && (validary <= 100) ) {
    //     hor = true    
    //     mx -= 100
    // }

    // if(validary < 0) validary *= -1
    // console.log(validary)
    // if(validary <= 100 && mx == movX ) {
    //     ver = true    
    //     my -= 10
    // }


    if(mx > 1400) hor = true
    if(mx <= 100) hor = false


    if(my > 500) ver = true
    if(my <=10) ver = false
    
    // if(mx == moverX) mx -= moverX

    x.style.left = mx + 'px'
    x.style.top = my + 'px'
}