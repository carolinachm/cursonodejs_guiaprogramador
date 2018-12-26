var express = require('express')
const app = express();

app.get("/", function(req, res){
    res.send("Seja bem-vindo ao meu app!")
});
app.get("/sobre", function(req, res){
    res.send("Minha pagina sobre")
});
app.get("/blog", function(req, res){
    res.send("Bem-vindo ao meu blog")
});
//rota com parametro
app.get("/ola/:cargo/:nome", function(req, res){
    res.send("<h1> Ola " + req.params.nome + "</h1>" + "<h2> Seu cargo é " + req.params.cargo + "</h2>");
  
});
app.listen(3000, function(){
    console.log("Servidor rodando na porta 3000")
});