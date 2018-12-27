const Sequelize = require('sequelize')

const sequelize = new Sequelize('teste', 'root', 'root', {
    host: "localhost",
    dialect: 'mysql'
})

sequelize.authenticate().then(function(){
    console.log("Conectado com sucesso!")
}).catch(function(erro){
    console.log("Falha ao conectar: " + erro)
})

const Postagem = sequelize.define('postagens', {
    titulo:{
        type:Sequelize.STRING,
    },
    conteudo:{
        type:Sequelize.TEXT
    }

})
Postagem.create({
    titulo: "Teste",
    conteudo: "dffdsadfdsfasdfasf"
})

const Usuario = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING

    }, 
    sobrenome: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    idade:{
        type: Sequelize.INTEGER
    }
    
})
Usuario.create({
    nome:"Jao",
    sobrenome: "silva",
    email: "jao@jao.com",
    idade: 36
})