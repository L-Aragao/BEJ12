const { Router } = require('express');
const routes = Router();
const catlogController = require('../controller/catalog_controller');

routes.post('/catlogs', catlogController.createBook);
// routes.get('/books')
// routes.get('/books/:id')
// routes.put('/books/')
// routes.put('/books/:id')
// routes.delete('/books')
// routes.delete('/books:id')

module.exports = routes;