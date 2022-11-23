let moveme = document.getElementById("mover"),
moverX = 0,
moverY = 0;

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