// Imprima o valores dados na ordem: 1 2 3

const { rejects } = require("assert")
const { resolve } = require("path")

// console.log(1);
// setTimeout(()=> console.log(2), 2000);
// console.log(3);


// callback é uma maneira de explorar o sincronismo

// console.log(1);

// setTimeout(()=> {
//     console.log(2)
//     setTimeout(() => {
//         console.log(3)
//     }, 1000)
// }, 5000);


// crie uma logica que valide duas leituras para calibraçao de bom, sabendo que a segunda aconteceu 2 segundos depois da primeira

let leitura1 = 0
let leitura2 = 0

function primeiraLeitura(callback) {
    leitura1 = 30
    callback()
}

// function segundaLeitura(callback) {
//     setTimeout(() => {
//         leitura2 = 30
//         callback()
//     }, 2000)
    
// }

// function validacaoLeitura() {
//     if (leitura1 > leitura2) { console.log("Validação - ok") }
//     else if (leitura1 == leitura2) { console.log("Falha na leitura - erro") }
//     else console.log("defeito no  instrumento ")
// }

// primeiraLeitura()
// console.log(leitura1)
// segundaLeitura()
// console.log(leitura2)
// validacaoLeitura()

// primeiraLeitura(
//     () => {
//         segundaLeitura(() => {
//             validacaoLeitura()
//         })
//     })

// solucao do mesmo exercicio com promise

//Modo padrao para declarar funcao com retorno de promise
function primeiraLeitura(){
    return new Promise ((resolve, reject) => { resolve(leitura1 = 30)})
}

//Modo arrow function para declarar funcao com retorno de promise
const segundaLeitura = () => new Promise((resolve, reject) => {
    setTimeout(() => { resolve (leitura2 = 25) }, 2000)
})

//Modo funcao anonima para declarar funcao com retorno de promise
const validacaoLeitura = function() { new Promise ((resolve, reject) => 
    {
        if (leitura1 > leitura2) { resolve(console.log("Validação - ok")) }
        else if (leitura1 == leitura2) { resolve(console.log("Falha na leitura - erro"))}
        else resolve(console.log( "defeito no  instrumento "))
    })}


// primeiraLeitura().then(
//     result => {
//         return segundaLeitura()
//     }
// ).then(
//     result => {
//         return validacaoLeitura()
//     }
// )

primeiraLeitura()
    .then(segundaLeitura)
    .then(validacaoLeitura)

