//HTTP é um modulo/ biblioteca que facilita criar um servidor que escuta em uma porta determinada

// import { createServer } from 'http';

const { STATUS_CODES } = require('http');
const http = require('http');

//criar servidor
http.createServer(function(req, res){
    // res.write('Primeiro Servidor/ Serviço', 'UTF-8');
    // res.write(req.url);
    if(req.url =='/primeirarequest'){
        res.write('Rota da primeria requisicao')
        res.end();
    }
    else{
        res.statusCode = 400;
        res.write('Deu erro, recursao nao disponivel')
        res.end();
    }
}).listen(8080);







