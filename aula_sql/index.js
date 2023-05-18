const mysql =  require("mysql2/promise");

const configs = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "password"
}

const connection = mysql.createPool({
    host: configs.HOST,
    user: configs.USER,
    password: configs.PASSWORD
})

// connection.getConnection((err) =>{
//     if(err){
//         console.error(err)
//     }
//     console.log('connected to mysql server!')
// })

const readProprietario = async () => {
    let tabela = await connection.execute(`SELECT * FROM BEJ_12.PROPRIETARIO`)
    // let [rows] = tabela
    // console.log(rows)
    console.log(tabela[0])
}

const criarProprietario = async (nome, documento) => {
    let tabela = await connection.execute(
        `INSERT INTO BEJ_12.PROPRIETARIO (NOME, DOCUMENTO) 
            VALUES(?, ?)`, [nome, documento]

    )
}

(async () => {
    await criarProprietario('PEACH', '12345678901X')
    await readProprietario()
})()

// CRUD -> SQL DML -> REST VERBS
// CREATE -> INSERT -> POST
// READ   -> SELECT -> GET
// UPDATE -> UPDATE -> PUT/ PATCH
// DELETE -> DELETE -> DELETE