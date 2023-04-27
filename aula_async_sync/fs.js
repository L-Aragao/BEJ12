// FS modulo/ biblioteca nativa para manipulaçao de arquivos

const fs = require('fs')

const path = "/Users/mac_luiz/Documents/Workspace/BEJ12/aula_async_sync/files"

// fs.writeFile(path+"/teste2.txt", "Arquivo teste", "UTF-8", () => console.log("Arquivo criado com sucesso!") )


let file1 = fs.readFile(path+"/teste2.txt", 'UTF-8', () => console.log("arquivo lido"));
console.log(file1)
let file2 = fs.readFileSync(path+"/teste2.txt", 'UTF-8')
console.log(file2)

