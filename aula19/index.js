var express = require('express')
const app = express();
const handlebars = require('express-handlebars');
const Sequelize = require('sequelize')
const bodyParser = require('body-parser')

//config
    //template Engine
    app.engine('handlebars', handlebars({defaultLayout: 'main'}))
    app.set('view engine', 'handlebars')

//conexao com banco de dados
const sequelize = new Sequelize('teste', 'root', 'root', {
    host: "localhost",
    dialect: 'mysql'
})
//bory parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
//rotas
app.get('/cad', function(req, res){
    res.render('formulario')
})
app.post('/add', function(req, res){
    res.send('salvando')
})


app.listen(3000, function(){
    console.log("Servidor rodando na porta 3000")
});