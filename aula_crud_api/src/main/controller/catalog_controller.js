const serviceBook = require('../service/book_service');

const createBook = async (req, res) => {
    let { nome, codigo, autor, qtd } = req.body
    try{
        let result = await serviceBook.createBook(nome, codigo, autor, qtd);
        if(result) res.status(201).send({status: "created"});
        else res.status(500).send({error: "bad_request"});
    }
    catch(error){
        res.status(400).send({error: "bad_request"})
    }
}

// const readBook = ( ) => {}
// const updateBook = ( ) => {}
// const deleteBook = () => {}

module.exports = {createBook}