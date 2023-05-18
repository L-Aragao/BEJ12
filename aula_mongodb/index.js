
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = "mongodb+srv://root:7Ik5Mavzdy7zkXnD@awariclass.x2viiej.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

const db = client.db('teste-awari-db');
const collection = db.collection('teste-awari-collection');

const documento1 = {
    nome: "Luiz",
    idade: 30
}

const documento2 = {
    id: ObjectId.generate(),
    nome: "joao",
    idade: 40,
    genero: 'Masculino'
}

const teste = async () => {


    // await collection.insertOne({teste: "123", numero: "teste"});
    const teste = await collection.find({nome: "joao"}).toArray();
    console.log(teste)
}
teste()

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
