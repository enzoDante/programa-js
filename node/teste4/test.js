const Sequelize = require('sequelize')
//parametros da conexao
//nomedoBanco | usuario | senha | json - host, dialect
//host = localhost e dialect = banco de dados
const sequelize = new Sequelize('projeto4_visual', 'root', '', {
    host:  "localhost",
    dialect: 'mysql'
})

/*sequelize.authenticate().then(function(){
    console.log("conectado com sucessooo xD")
}).catch(function(erro){
    console.log("n conectou :( "+erro)
})//verifica se foi possível conectar ao banco

//then e cacth é a mesma coisa que try e except do python*/

const inserir = sequelize.define('nometabela', {
    titulo:{
        type: Sequelize.STRING //varchar
    },
    conteudo:{
        type: Sequelize.TEXT//text
    }

})//definir uma tabela, um modelo

// inserir.sync({force: true})//sincroniza o modelo dela com o mysql

// inserir.create({
//     titulo: "titulo qualquer",
//     conteudo: "qualquer coisa teste aq"
// })