var express = require('express');
var path = require('path');
var watson = require('watson-developer-cloud');
var bodyParser = require('body-parser');
var app = express();
var pjson = null;
var data = "";

var alchemy_language = watson.alchemy_language({
  api_key: '9a207df61cd0e150376dc6a36c6615f9ff24f69b'
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

var waitAlchemy = function(req, params, callback){
  //console.warn("sdfsdf");
  pjson = "";
	alchemy_language.combined(params, function (err, response) {
	   pjson = JSON.stringify(response, null, 2));
	});
	if (pjson == null) {
	 	res.sendStatus(400);
	}
	callback();
};

app.get('/alchemy', function(req, res) {
    //console.log("sdasdasdfsdf");
	 var parameters = {
				  extract: 'entities, keywords',
				  sentiment: 1,
				  maxRetrieve: 1,
				  url: "http://finance.ngrok.io/post"
				};
	  waitAlchemy(req, parameters, function(){
		    console.log(pjson);
	 });


});
