var express = require('express');
var path = require('path');

var app = express();

//app.use('/stockmarket', require('./nasdaq/'));
app.use('/test', require('./nasdaq/TestingNasdaq'));

// Static paths to be served like index.html and all client side js
app.use(express.static(path.join(__dirname, 'public')));

app.listen(process.env.NODE_PORT || 3000, process.env.NODE_IP || 'localhost',
function () {
   console.log('App Listening on port 3000');
});
