var express = require('express')
const app = express();
const handlebars = require('express-handlebars');
const Sequelize = require('sequelize')

//config
    //template Engine
    app.engine('handlebars', handlebars({defaultLayout: 'main'}))
    app.set('view engine', 'handlebars')

//conexao com banco de dados
const sequelize = new Sequelize('teste', 'root', 'root', {
    host: "localhost",
    dialect: 'mysql'
})
//rotas
app.get('/cad', function(req, res){
    res.render('formulario')
})


app.listen(3000, function(){
    console.log("Servidor rodando na porta 3000")
});