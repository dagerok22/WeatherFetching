var express = require('express');
var app = express();
var weatherRouter = require('./app/router');

app.use('/', weatherRouter.router);

app.listen(3000);
