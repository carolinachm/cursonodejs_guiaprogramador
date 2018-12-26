var express = require('express')
const app = express();

app.get("/", function(req, res){
    res.sendFile(__dirname + "/html/index.html")
});
app.get("/sobre", function(req, res){
    res.sendFile(__dirname + "/html/sobre.html")
});
app.get("/blog", function(req, res){
    res.sendFile(__dirname + "/html/blog.html")
});
//rota com parametro
app.get("/ola/:cargo/:nome", function(req, res){
    res.send("<h1> Ola " + req.params.nome + "</h1>" + "<h2> Seu cargo é " + req.params.cargo + "</h2>");
  
});
app.listen(3000, function(){
    console.log("Servidor rodando na porta 3000")
});