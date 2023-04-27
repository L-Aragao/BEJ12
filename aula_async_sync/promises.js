
/**
 * Promises - sabemos que em virtude do async do javascritp, teremos o callback
 * e o callback não é um processo executado de maneira sync/ resolucao instantenea
 * entao criamos a promessa
 * pois assim conseguimos encadear os passo do fluxo de execucao
 */

const fs = require('fs')
const { resolve } = require('path')

const path1 = "/Users/mac_luiz/Documents/Workspace/BEJ12/aula_async_sync/files/teste.txt"
const path2 = "/Users/mac_luiz/Documents/Workspace/BEJ12/aula_async_sync/files/teste2.txt"

const leArquivo = (caminhoDoArquivo) => new Promise ((resolve, reject) =>{
    fs.readFile(caminhoDoArquivo, 'UTF-8', (err, contents) => {
        if(err){
            reject(err)
        } else{
            resolve(contents)
        }
    })
})

let arquivo1 = leArquivo(path1)
console.log(arquivo1)

arquivo1.then(
    result => {
        console.log(result)
        return leArquivo(path2)
    }

).then(
    result => {
        console.log(result)
    }
)