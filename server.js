var express = require('express');
var favicon = require('serve-favicon');
var bodyParser = require('body-parser');
var cors = require('cors');
var errorHandler = require('errorhandler');
var config = require('config');
var path = require('path');
var expressValidator = require('express-validator');
var app = express();
global.appRoot = path.resolve(__dirname);
var httpPort = config.get('port');

// configure out middleware to be used with Express
app.use(bodyParser.json());
app.use(expressValidator([]));
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(cors());
app.use(errorHandler());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', require('./controllers'));

app.listen(httpPort, function() {
    console.log('Express server listening on Port ' + httpPort);
});