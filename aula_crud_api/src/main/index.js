const express = require('express');
const appserver = express();
const port = 3000;

appserver.use(express.json());
appserver.use(express.urlencoded({ extended: true }));
appserver.use(routes);

appserver.listen(port);