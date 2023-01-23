let cmodal = document.getElementById("modal")
// let btn  = document.getElementById("button")
function modal(e){
    // if(e.target.id == 'modal' || e.target.id == 'button' || e.target.id == 'bt')
    cmodal.style.display = (cmodal.style.display == 'none') ? 'block' : 'none'
}
window.onclick = function(event){
    if(event.target == cmodal)
        cmodal.style.display = 'none'
}
// btn.onclick = function(){
//     cmodal.style.display = 'block'
// }