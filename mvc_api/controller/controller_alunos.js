const model = require('../model/model_alunos')


//CRUD consegue ter relaçao com os verbos do HTTP (POST, GET, PUT, DELETE)

const createAlunos = async (req, res) => {
    let aux = await model.create(req.body);
    aux? res.send({ 'created': 'ok' }) : res.send({ 'created': 'error' });
}

const readAlunos = async (req, res) => { 
    let alunos = await model.read();
    alunos? res.send( alunos ) : res.status(500).send({'error': "recurso nao disponivel"})
}

const updateAlunos = async (req, res) => { 
    await res.send({...model.update()}); 
}

const deleteAlunos = async (req, res) => { 
    let aux = await model.deleteAll()
    aux? res.send({ 'deleteAll': 'ok' }) : res.status(404).send({ 'deleteAll': 'error' });
}

module.exports = { createAlunos, readAlunos, updateAlunos, deleteAlunos }


//OPERADOR TERNARIO

// if(aux){verdade} else{mentira}

// aux? verdade : mentira