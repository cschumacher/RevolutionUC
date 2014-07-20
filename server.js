//server.js

var express = require('express'),
		app = express(),
		port = 3000;

require('./app/routes')(app);

var server = app.listen(port, function() {
	console.log('info', 'Server listening on port ', port);
}
