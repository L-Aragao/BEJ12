const fs = require("fs/promises")

const diretorio = "/Users/mac_luiz/Documents/Workspace/BEJ12/aula_formas_async/arquivos";


// async e await eh uma maneira de trabalhar com promises

async function leiturasEescritas(){
    await fs.writeFile(diretorio+"/testes4.txt", "Teste com async await", "UTF-8");
    let arquivo4 = await fs.readFile(diretorio+"/testes4.txt", "UTF-8");
    await fs.writeFile(diretorio+"/testes5.txt", arquivo4+"2", "UTF-8");
    let arquivo5 = await fs.readFile(diretorio+"/testes5.txt", "UTF-8");
    console.log(arquivo4)
    console.log(arquivo5)
 
}

leiturasEescritas()



