let amigo = {
    nome: 'José',
    sexo: 'M',
    peso: 85.4,
    engordar(p=0){
        this.peso += p
        //this se refere ao próprio objeto 'amigo'
    }
}
console.log(amigo)

amigo.engordar(2)

console.log(`Nome: ${amigo.nome} engordou: ${amigo.peso}`)

