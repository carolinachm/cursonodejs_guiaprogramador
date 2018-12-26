var http = require('http')
//abrir um servidor
http.createServer(function(req, res){
    res.end("Olá");
}).listen(3000);

console.log("Servidor rodando na porta 3000!!!")