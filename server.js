//server.js

var express = require('express'),
		app = express(),
		port = 3000,
		path = require('path');

require('./app/routes')(app);

app.set('views', './app/views');
app.set('view engine', 'jade');
app.set('view options', {doctype: 'html'});

app.use(express.static(path.join(__dirname, "public")));

var Hacker = mongoose.model('Hacker', {
	name: String,
	email: String,
	university: String,
	college: String,
	major: String,
	gender: String,
	bio: String,
	resume: String
})

var server = app.listen(port, function() {
	console.log('info', 'Server listening on port ', port);
});
