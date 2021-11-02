function imagem(){
    var res = document.getElementById("res")


    if(this.files && this.files[0]){
        var arquivo = new FileReader()
        arquivo.onload = function(e){
            var img = document.createElement("img")
            img.setAttribute("src", e.target.result)
            img.setAttribute("class","imag")
            img.setAttribute("onclick","fechar(this)")
            img.setAttribute("aceppt","image/*")

            res.appendChild(img)
            //document.getElementById("img").src = e.target.result
        }
        arquivo.readAsDataURL(this.files[0])
        

    }
}
document.getElementById("inputImagem").addEventListener("change", imagem, false)

function fechar(x){
    x.outerHTML = ''
}