const fs = require('fs/promises')
const fs2 = require('fs')
const fileName = '/Users/mac_luiz/Documents/Workspace/BEJ12/mvc_api/alunos/alunos.txt'


const create = async (aluno) => {
    try {
        if (verifyFileExist()) {
            await fs.appendFile(fileName, ','+JSON.stringify(aluno), "UTF-8");
            return true;
        } else {
            await fs.writeFile(fileName, JSON.stringify(aluno), "UTF-8");
            return true;
        }
    } catch (err) {
        console.error(err)
        return false;
    }
}

const read = async () => {
    try {
        let file = await fs.readFile(fileName, 'utf-8');
        return file
    } catch (err) {
        console.error(err)
        return null
    }
}

const update = async () => {
    return await { "error": "nao disponivel" };
}

const deleteAll = async () => {
    try {
        await fs.unlink(fileName);
        return true;
    } catch (err) {
        console.error(err)
        return false;
    }
}

const verifyFileExist = () => {
    // await fs.access(fileName, fs.F_OK, (err) => {
    //     if (err) {
    //         return false;
    //     } else {
    //         return true;
    //     }
    // })
    return fs2.existsSync(fileName)
}

module.exports = { create, read, update, deleteAll }