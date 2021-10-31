//var filme1 = "Yesterday"
//var filme2 = "A chegada"
//var filme3 = "Escola do Rock"

/*var filmes = ["Yesterday", "A chegada", "Ecola do Rock"]
============================================================= ou
var filmes02 = []
filmes02.push("Yesterday")
filmes02.push("A chegada")
filmes02.push("Escolha do Rock")
console.log(filmes02)

console.log(filmes[0])
console.log(filmes[1])
console.log(filmes[2])

for(var x = 0; x <= 2; x++){
    console.log(filmes[x])
}

for(var x = 0; x <= filmes.length; x++){
    console.log(filmes[x])
}
*/
//=======================================================================
var filmes03 = ["https://m.media-amazon.com/images/M/MV5BZDgzNzdmNj    EtMDAwMC00M2FiLTlkMTEtMDE0MDIyNTEwYmJlXkEyXkFqcGdeQXVyMjY3MjUzNDk@._V1_UY268_CR12,0,182,268_AL_.jpg"]

var listaFilmes = [
    "https://upload.wikimedia.org/wikipedia/pt/7/79/Yesterday_%282019%29_poster.jpg",
    "https://1.bp.blogspot.com/-ImZPRqLsluE/WFK156_6pNI/AAAAAAAAYBY/0lEhNRF5wfQdLfr6hpT57_Jt2eBrE9H5wCLcB/s1600/arrival-kartoun-desert.jpg",
    "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/91/90/98/20169244.jpg"]

for(var i = 0; i < listaFilmes.length; i++){
    document.write("<img src="+ listaFilmes[i] + ">")
}
