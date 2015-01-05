var express = require('express');
var bodyParser = require('body-parser');
var indexController = require('./controllers/index.js');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', indexController.index);
app.get('/about', indexController.about);
app.get('/products', indexController.products);
app.get('/facilities', indexController.facilities);
app.get('/contact', indexController.contact);

var server = app.listen(5575, function() {
	console.log('Express server listening on port ' + server.address().port);
});
