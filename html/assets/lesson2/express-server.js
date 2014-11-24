var express = require('express');
var app = express();

// Add a reponse route
app.get('/', function(req, res){
  res.send('Hello World!');
});

// Start the server
var server = app.listen(3000, function () {
  console.log('Example app listening at http://%s:%s', 'localhost', '3000');
});
