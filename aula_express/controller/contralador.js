


const lerAlunos = (req, res) =>  { 
    res.send(recuperaAlunos(req))
}

module.exports = {lerAlunos}