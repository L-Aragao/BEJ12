//url é modulo/ biblioteca que permite o tratamento da url

const url = require('url');

//url = host + path + parameters
// www.facebook.com / lpajunior/foto/ id=3

let endereco = 'http://localhost:8080/perfil123/fotos/?year=2023&month=Jan';


let endereco_tratado = url.parse(endereco, true);

console.log(endereco_tratado.host); //  http://localhost:8080
console.log(endereco_tratado.pathname); //  /perfil123/fotos/
console.log(endereco_tratado.search); // ?year=2023&month=Jan

let endereco_paramentros = endereco_tratado.query; // { year: 2023, month: 'Jan' }
console.log(endereco_paramentros.year);
console.log(endereco_paramentros.month);