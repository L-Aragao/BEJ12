const axios = require('axios');
const fs = require('fs/promises')

const fatosDeGato = "https://catfact.ninja/fact";

// axios.get(fatosDeGato)
//     .then(resultado => console.log(resultado.data))

let path = '/Users/mac_luiz/Documents/Workspace/BEJ12/aula_npm_json/axios'

async function teste () {
    let fatos = await axios.get(fatosDeGato)
    fatos = JSON.stringify(fatos.data)
    await fs.writeFile(path + "/arquivo/fatosDeGato.txt", "Teste: " + fatos, "UTF-8")
    let arquivo = await fs.readFile(path+ "/arquivo/fatosDeGato.txt", "utf-8")
    console.log(arquivo) 
}

teste()

// IIEF