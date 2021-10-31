var grupo = ["Enzo","Gustavo","Samuel","Rafael"]
var num = []
var x = parseInt(Math.random()*4)+1
for(var i in grupo){
    num[i] = x
    console.log(grupo[i]+" número: "+ num[i])
    x = parseInt(Math.random() * 4) + 1
    while(x == num[0] || x == num[1] || x == num[2] || x == num[3]){
        x = parseInt(Math.random()*4)+1
    }
}