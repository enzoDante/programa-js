var agora = new Date() //todos os dados de hoje
var hora = agora.getHours()
console.log(`Horas = ${hora}`)
if(hora < 12){
    console.log("Bom dia")
}
else{
    if(hora <=18){
        console.log("Boa tarde")
    }
    else{
        console.log("Boa noite")
    }
}