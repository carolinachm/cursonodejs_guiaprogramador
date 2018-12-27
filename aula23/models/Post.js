const db = require('../connection/db')
const type  = db.Sequelize

const Post = db.define('postagens',{
    titulo:{
        type:type.STRING,
    },
    conteudo:{
        type:type.TEXT
    },
    autor:{
        type:type.STRING,
    }

})
module.exports = Post;