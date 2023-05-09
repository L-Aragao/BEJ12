const express = require("express")

const app = express();


app.get('/primeiraRota', (req, res) => {
    res.send("Hello World")
});
app.get('/segundaRota', (req, res) =>{
    res.send("Hello World 2")
})

app.listen(8080);


const http = require("http")
// http.createServer(function (req, res) {
//     if (req.url == '/primeiraRota') {
//         res.write('Hello World')
//         res.end();
//     } else if (req.url == '/segundaRota') {
//         res.write('Hello World 2')
//         res.end();
//     } else {
//         res.end();
//     }
// }).listen(8080);


