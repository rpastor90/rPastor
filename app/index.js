var path = require('path');
var express = require('express');
var morgan = require('morgan');
var app = express();
module.exports = app;

app.use(morgan('dev'));

var pathToIndexHTML = path.join(__dirname, '../', './views/index.html');

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.static(path.join(__dirname, '../node_modules')));

app.get('/', function (req, res, next) {
  res.sendFile(pathToIndexHTML);
});

