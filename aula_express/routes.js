const express = require('express')

const routes = express.Router();
const controller = require('./controller/contralador')

//recupera alunos
routes.get('/alunos/', (req, res) =>  { res.send(recuperaAlunos(req))});

// criar 1 aluno ou mais
routes.post('/alunos', (req, res) => { 
    let corpo = req.body
    res.send({"msg" :"aluno criado com sucesso", ... corpo}) //operador rest
    // res.send({... corpo, "msg" :"aluno criado com sucesso"}) //operador spread
});

//recupera 1 aluno por ID
//2 tipos de parametro params e o queries
//queries - /alunos/?id=1&name=luiz
routes.get('/alunos/aluno/', (req, res) => {
    res.send(`aluno${req.query.id}, nome: ${req.query.name}`)
})

// params - /alunos/id/name
routes.get('/alunos/:id/:name', (req, res) => {
    let id = req.params.id
    let nome = req.params.name
    res.send(`aluno${id}, nome: ${nome}`)
})

function recuperaAlunos(req){
        return ['aluno1', 'aluno2', 'aluno3']
}

// function recuperaAlunos(req){
//     if(!req.query.id)
//         return ['aluno1', 'aluno2', 'aluno3']
//     else
//         return `aluno${req.query.id}, nome: ${req.query.name}`
// }

module.exports = routes;