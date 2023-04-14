const { STATUS_CODES } = require('http');
const http = require('http');
const url = require('url');

//criar servidor
http.createServer(function(req, res){
    
    let urlService = (url.parse(req.url, true))

    if(urlService.pathname =='/calcularMedia/'){
        let numerosTxt = urlService.query;
        let numeros = numerosTxt['notas'] //"[1,2,3,4]"
        numeros = numeros.replace("[", "");
        numeros = numeros.replace("]", "");
        numeros = numeros.split(",");
        numeros = numeros.map( numero => Number(numero));

        let total = 0
        numeros.forEach(element => total += element );

        res.write(`{ media: ${total/numeros.length}}`);
        
        res.end();
    }
    else{
        res.statusCode = 400;
        res.write('Deu erro, recursao nao disponivel')
        res.end();
    }
}).listen(8080);