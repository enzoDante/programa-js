var rafa = { //objeto
    nome:"Rafa", 
    vitorias: 2, 
    empates:1, 
    derrotas:1, 
    pontos:0
}
var paulo = {nome:"Paulo", vitorias: 1, empates:1, derrotas:1, pontos:0}
var gui = {nome:"Gui", vitorias: 1, empates:1, derrotas:2, pontos:0}

console.log(rafa.vitorias)//para ver vitorias da rafa
console.log(paulo.empates)//ver empates de paulo
console.log(gui.nome)//ver nome de gui

function calculaPontos(jogador){ //função junto com POO
    //calcula pontos totais do jogador
    //jogador é o objeto
    var pontos = (jogador.vitorias * 3) + jogador.empates
    return pontos
    //retorna "pontos" para alguma variável q irá mostrar
    //na tela a pontuação
}

rafa.pontos = calculaPontos(rafa) //chama a função acima
paulo.pontos = calculaPontos(paulo)
gui.pontos = calculaPontos(gui)

var jogadores = [rafa, paulo, gui]//variavel com os objetos

function exibirJogadoresNaTela(jogadores){
    //vai exibir na tela o html abaixo, mostrando tudo
    var html = ""
    for(var i = 0; i < jogadores.length; i++){
        html += "<tr><td>" +jogadores[i].nome+"</td>"
        html += "<td>"+jogadores[i].vitorias+"</td>"
        html += "<td>"+jogadores[i].empates+"</td>"
        html += "<td>"+jogadores[i].derrotas+"</td>"
        html += "<td>"+jogadores[i].pontos+"</td>"
        html += "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>"
        html += "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>"
        html += "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>"
        html += "</tr>"
    }
    var tabelaJogadores = document.getElementById("tabelaJogadores")
    tabelaJogadores.innerHTML = html
    //adiciona "html" para aparecer na tabela
}

exibirJogadoresNaTela(jogadores)//chama o procedimento

function adicionarVitoria(i){
    var jogador = jogadores[i]
    jogador.vitorias++//adiciona +1 na vitória desse jogador
    jogador.pontos = calculaPontos(jogador)//chama função
    exibirJogadoresNaTela(jogadores)//chama procedimento
}
//abaixo é a mesma coisa q acima
function adicionarEmpate(i){
    var jogador = jogadores[i]
    jogador.empates++
    jogador.pontos = calculaPontos(jogador)
    exibirJogadoresNaTela(jogadores)
}
function adicionarDerrota(i){
    var jogador = jogadores[i]
    jogador.derrotas++
    exibirJogadoresNaTela(jogadores)
}
