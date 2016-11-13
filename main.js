var express = require('express');
var path = require('path');
var watson = require('watson-developer-cloud');
var bodyParser = require('body-parser');
var app = express();
var pjson = null;
var dat = "";

var alchemy_language = watson.alchemy_language({
  api_key: '2190f450728492113ce4e5b880a72eefbea73308'
});

// Static paths to be served like index.html and all client side js
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('extra'));
app.use(bodyParser.json());
app.set('view engine', 'pug');
app.set('views', __dirname+'\\views\\');

app.listen(process.env.NODE_PORT || 3000, process.env.NODE_IP || 'localhost',
function () {
   console.log('App Listening on port 3000');
});

app.post('/', function(req, res) {
	dat = req.body.out;
});

app.get('/post', function(req, res) {
	res.render('post.jade', { message: dat });
});

app.get('/subm', function(req, res) {
	var parameters = {
				  extract: 'entities,keywords',
				  sentiment: 1,
				  maxRetrieve: 1,
				  url: "http://finance.ngrok.io/post"
				};
	alchemy_language.combined(parameters, function (err, response) {
	   res.send(JSON.stringify(response, null, 2));
	});
});
