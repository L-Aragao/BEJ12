const exp = require('constants');
const express = require('express');
const app = express();

app.use(express.json());

// Object containing key-value pairs
let data = {
  livro1: 10,
  livro2: 10,
  livro3: 10,
  livro4: 10
};

// Endpoint to retrieve value based on key
app.get('/books/:key', (req, res) => {
  const key = req.params.key;
  const value = data[key];

  if (value) {
    res.json({ livro_qtd: value });
  } else {
    res.status(404).json({ error: 'Book not found' });
  }
});

// Endpoint to create/ persist a value based on key
app.post('/books/', (req, res) => {
  const book = req.body;
  try{
    data[book.nome] = book.qtd;
    res.status(201).send({status: "created"}) 
  }
  catch(error){
    res.status(400).json({ error: 'bad_request' });
  }
});


// Endpoint to update value based on key and qtd
app.put('/books/:key/:qtd', (req, res) => {
    const key = req.params.key;
    const qtd = req.params.qtd;
  
    if (data[key]) {
      data[key] =  parseInt(qtd);
      res.json({ livro_nova_qtd: data[key] });
    } else {
      res.status(404).json({ error: 'Book not found' });
    }
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});