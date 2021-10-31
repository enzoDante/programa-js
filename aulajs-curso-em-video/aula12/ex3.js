var agora = new Date()
var diasemana = agora.getDay()

console.log(diasemana)
switch(diasemana){
    case 0:
        console.log("Hoje é domingo!")
        break
    case 1:
        console.log("Hoje é Segunda!")
        break
    case 2:
        console.log("Hoje é terça!")
        break
    case 3:
        console.log("Hoje é quarta!")
        break
    case 4:
        console.log("Hoje é quinta!")
        break
    case 5:
        console.log("Hoje é sexta!")
        break
    case 6:
        console.log("Hoje é sábado!")
        break
    default:
        console.log("ERROR: Dia inválido!!!")
        break
}