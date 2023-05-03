
const fs = require("fs");

const diretorio = "/Users/mac_luiz/Documents/Workspace/BEJ12/aula_formas_async/arquivos";

// function escrita() { return new Promise((resolve, reject) => {

// })}

const escrita = (pathFileName, conteudo) => new Promise((resolve, reject) => {
    fs.writeFile(pathFileName, conteudo, () => {
        resolve("arquivo criado")
    })
})

// const leitura = (pathFileName) => new Promise((resolve, reject) => {
//     fs.readFile(pathFileName, "UTF-8", (err, contents) => {
//         if (err) {
//             reject(err)
//         }
//         else {
//             resolve(contents)
//         }
//     })
// })

function leitura(x){
    return new Promise ((resolve, reject) =>{
        fs.readFile(x, "UTF-8", (err, contents)=>{
            if(err){
                reject(err)
            }
            else{
                resolve(contents)
            }
        })
    })
}

// escrita(diretorio + "/teste3.txt", "Teste promises")
//     .then(() => leitura(diretorio + "/teste3.txt"))
//     .then(result => console.log(result))


let arquivo = leitura(diretorio + "/teste3.txt")
console.log(arquivo)// promise pendente

arquivo
    .then(result => console.log(result))
    .then(escrita(diretorio + "/teste4.txt", "Teste promises2"))
    .then(() => leitura(diretorio + "/teste4.txt"))
    .then(result => console.log(result))
    // .catch(err => console.log(err))

//util => promisify

// // Usando promisify para lidar com o setTimeout
// const calculoDobro = async (numero) => {
//     return await promisify(setTimeout)(2*1000, numero*2)
// }

const fs2 = require('fs/promises');
const { resolve } = require("path");

let arquivo2 = fs2.readFile(diretorio + "/teste3.txt", "UTF-8")
arquivo2.then(resultado => console.log(resultado))

const { promisify } = require("util")

//bibliotecas que nao possuem promise nativo
const espera = () => new Promise((resolve, reject) =>{
    setTimeout(()=> resolve(), 3*1000)
})

//verificar se o util.promisify atende a biblioteca legada
const espera2 = () => promisify(setTimeout)(3*1000)

console.log(1)
espera2()
.then(console.log(2))
.then(espera2())
.then(console.log(3))


