const express = require('express')
const routes = require('./routes')

const app = express();

app.use(express.json()); //permite tratar requisicoes com body json
app.use(express.urlencoded({extended: true})); //permite receber requisicoes encoded
app.use(routes);
app.listen(8080);