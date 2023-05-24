const catlogRepository = require('../repository/book_db');
const axios = require('axios');


const availableBooks = () => { }
const sellBooks = () => { }

const createBook = async (nome, codigo, autor, qtd) => {
        
        try {
                let data = JSON.stringify({"nome": nome, "qtd": qtd});
                let customConfig = { headers: {'Content-Type': 'application/json'}}
                let url = 'http://localhost:3000/books'
                let response = await axios.post(url, data, customConfig)
                if (response.status == 201) {
                        return await catlogRepository.createBook({ nome, codigo, autor });
                }else{
                        return false
                }
        }catch(error){
                console.error(error)
                return false
        }

};

const readBook = () => { }
const updateBook = () => { }
const deleteBook = () => { }

module.exports = { availableBooks, sellBooks, createBook, readBook, updateBook, deleteBook }