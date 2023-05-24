const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = "mongodb+srv://root:dYkhnappuV7gq1Q0@awari-test.hwugarg.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

const db = client.db('catlog-db');
const collection = db.collection('catlog-collection');


const createBook = async (livro) => {
    try{
        await collection.insertOne(livro)
        return true
    }
    catch(error){
        console.error("Erro ao criar o livro: ", error)
        return false
    } 
}

const readBook = async (id) => {
    try{
        let livro = await collection.findOne({codigo: 1})
        return livro
    }
    catch(error){
        console.error("Erro recuperar o livro: ", error)
        return null
    } 
}

const readAllBook = async (id) => {
    try{
        let livros = await collection.find()
        return livros
    }
    catch(error){
        console.error("Erro recuperar o livro: ", error)
        return null
    } 
}

const updateBookByID = async (id, newFields) => {
    try{
        let livro = await collection.updateOne({codigo: 1}, newFields )
        return true
    }
    catch(error){
        console.error("Erro atualizar o livro: ", error)
        return false
    } 
}

const deleteBookByID = async (id) => {
    try{
        let livro = await collection.deleteOne({codigo: 1})
        return true
    }
    catch(error){
        console.error("Erro ao deletar o livro: ", error)
        return false
    } 
}

module.exports = { createBook, readBook, readAllBook, updateBookByID, deleteBookByID }



// function to teste connection
// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);