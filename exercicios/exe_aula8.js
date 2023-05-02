//http
//fs


const http = require('http');
const fs = require('fs')

http.createServer(function(req, res){
    // res.write('Primeiro Servidor/ Serviço', 'UTF-8');
    // res.write(req.url);
    if(req.url =='/primeirarequest'){
        fs.writeFile("./log", req.url)
        res.write('Rota da primeria requisicao')
        res.end();
    }
    else{
        res.statusCode = 400;
        res.write('Deu erro, recursao nao disponivel')
        res.end();
    }
}).listen(8080);
