var express = require('express')
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser')
const Post = require('./models/Post')

//config
    //template Engine
    app.engine('handlebars', handlebars({defaultLayout: 'main'}))
    app.set('view engine', 'handlebars')
//body-parse
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
//rotas
app.get('/', function(req, res){
    res.render('home')
})
app.get('/cad', function(req, res){
    res.render('formulario')
})
app.post('/add', function(req, res){
    Post.create({
       titulo: req.body.titulo,
       conteudo: req.body.conteudo,
       autor: req.body.autors
    }).then(function(){
        res.send("Post  cadastrado com sucesso!")
    }).cath(function(erro){
        res.send("Falha ao cadastra a postagem")
    })
})


app.listen(3000, function(){
    console.log("Servidor rodando na porta 3000")
});