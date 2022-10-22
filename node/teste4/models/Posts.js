const db = require('./db') // ./ diz q o arquivo esta na msm pasta

const Post = db.sequelize.define('postagens', {
    titulo: {
        type: db.Sequelize.STRING
    },
    conteudo: {
        type: db.Sequelize.TEXT
    }
});

module.exports = Post
//Post.sync({force: true})
