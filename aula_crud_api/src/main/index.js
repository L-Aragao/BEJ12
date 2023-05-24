const express = require('express');
const appserver = express();
const port = 3030;
const catlog_routes = require('./route/catlog_route');


appserver.use(express.json());
appserver.use(express.urlencoded({ extended: true }));
appserver.use(catlog_routes);

appserver.listen(port);