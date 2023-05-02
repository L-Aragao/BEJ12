
const fs = require("fs");

const diretorio = "/Users/mac_luiz/Documents/Workspace/BEJ12/aula_formas_async/arquivos";

//Famoso CALLBACK HELL
fs.writeFile(diretorio + "/teste1.txt", "Arquivo de teste1", "UTF-8",
    () => {
        fs.readFile(diretorio + "/teste1.txt", (err, contents) => {
            console.log("Arquivo 1 lido!")
            console.log(contents)
            fs.writeFile(diretorio + "/teste2.txt", "Arquivo de teste2", "UTF-8", () => {
                console.log("Arquivo 1 lido!")
                console.log(contents)
                fs.readFile(diretorio + "/teste2.txt", (err, contents) => {
                    console.log("Arquivo 2 lido!")
                    console.log(contents)
                })
            })
        })
    })


// fs.writeFile(diretorio+"/teste3.txt", "Teste de arquivo 3", "UTF-8", ()=> null)

fs.readFile(diretorio+"/teste3.txt", (err, content) => {
    if(err) console.log(err)
    else console.log(content)
} )
