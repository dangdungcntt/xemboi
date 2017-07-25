'use strict';
require('dotenv').config();
let express = require('express');
let bodyParser = require('body-parser');

var app = express();

//body-parser for get data from post form
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//set template ejs, static folder
app.set('views', './apps/views');
app.set('view engine', 'ejs');
app.use('/public', express.static('./public'));

//controller for define route
var controllers = require('./apps/controllers');
app.use(controllers);


// var host = config.get('server.host');
let port = process.env.PORT || 3000;
let server = app.listen(port, () => {
	console.log('Server running on PORT ' + port);
});
