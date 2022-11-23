var movX1 = 400, movX2 = 500

var x = document.getElementById("mover2")
var mx = 0, my = 0
var ver = false, hor = false
var validar = 0, validary = 0
setInterval(testar, 100)
// testar()
function testar(){
    if(hor) mx -= 10
    else mx += 10
    validar = mx - movX1
    
    if(validar < 0) validar *= -1
    // console.log(validar)
    if(validar < 100 ) {
        hor = true    
        mx -= 10
    }

    if(mx > 1400) hor = true
    if(mx <= 100) hor = false

    x.style.left = mx + 'px'
    // x.style.top = my + 'px'
}
//===============================================
var xx = document.getElementById("mover4")
var mxx = 500
var ver = false, horr = false
var validarr = 0, validary = 0
var validarr2 = 0
setInterval(testar1, 150)
testar1()
function testar1(){
    if(horr) mxx -= 10
    else mxx += 10
    validarr = mxx - movX1
    validarr2 = mxx - movX2

    if(validarr < 0) validarr *= -1
    if(validarr2 < 0) validarr2 *= -1
    // console.log(validar)
    if(validarr <= 100 && mxx <= movX2) {
        horr = true    
        mxx -= 10
    }
    if(mxx <= movX2 && validarr2 <= 100){
        horr = false
        mxx += 10
    }

    if(mxx > 600) horr = true
    if(mxx <= 100) horr = false

    xx.style.left = mxx + 'px'
    // x.style.top = my + 'px'
}