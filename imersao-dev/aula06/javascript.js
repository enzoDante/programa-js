var cartaSeiya = { //carta
    nome: "Seiya de Pégaso",
    atributos: {
        ataque: 8,
        defesa: 6,
        magia: 9
    }
}
//console.log(cartaSeiya.atributos["ataque"]) ou

/* for(var atributo in cartaSeiya.atributos){
    console.log(cartaSeiya.atributos[atributo])
}*/

var cartaPokemon = {
    nome: "Bulbasauro",
    atributos: {
        ataque: 8,
        defesa: 7,
        magia: 8
    }
}
var cartaStarWars = {
    nome: "Lorde Darth Vader",
    atributos: {
        ataque: 10,
        defesa: 5,
        magia: 6
    }
}

var cartaMaquina//recebe carta
var cartaJogador//recebe outra carta
var cartas = [cartaSeiya, cartaPokemon, cartaStarWars]
//todas as cartas são armazenadas aqui

function sortearCarta(){ //apertou botão p receber carta
    var numCartaMaquina = parseInt(Math.random() * 3)
    cartaMaquina = cartas[numCartaMaquina]//maquina recebe carta

    var numCartaJogador = parseInt(Math.random() * 3)
    while(numCartaJogador == numCartaMaquina){
        numCartaJogador = parseInt(Math.random() * 3)
    }

    cartaJogador = cartas[numCartaJogador]//player recebe carta

    //muda se é permitido apertar no botão
    document.getElementById("btnSortear").disabled = true
    document.getElementById("btnJogar").disabled = false
    exibirOpcoes() //mostra as opções ao receber carta
}

function exibirOpcoes(){
    var opcoes = document.getElementById("opcoes")//irá mostrar opções aqui
    var opcoesTexto = ""
    for(var atributo in cartaJogador.atributos){
        opcoesTexto += `<input type="radio" name="atributo" value="`+atributo+`">` + atributo //cria radio com todos os atributos
    }
    opcoes.innerHTML = opcoesTexto//mostra os radios em opcoes
}

function obtemAtributosSelecionado(){//dentro de jogar
    //recebe todos os radios com name="atributo"
    var radioAtributo = document.getElementsByName("atributo")
    for(var i = 0; i < radioAtributo.length; i++){//quantos radio tem
        if(radioAtributo[i].checked){//verifica qual foi clicado
            return radioAtributo[i].value//retorna o valor do q foi clicado
        }
    }
}

function jogar(){//botão jogar
    //chama função p receber o valor do radio q foi clicado
    var atributoSelecionado = obtemAtributosSelecionado()
    //varifica os atributos selecionados p decidir quem ganhou
    if(cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]){
        alert("Você venceu! "+cartaJogador.atributos[atributoSelecionado])

    }else if(cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]){
        alert("Você perdeu! " + cartaJogador.atributos[atributoSelecionado])
        alert("atributo inimigo "+cartaMaquina.atributos[atributoSelecionado])
    }
    else{
        alert("Empate!")
    }
    //permite q tudo ocorra dnv
    document.getElementById("btnJogar").disabled = true
    document.getElementById("btnSortear").disabled = false
    var opcoes = document.getElementById("opcoes")
    opcoes.innerHTML = ""
}
