var express = require('express');
var app = express();
var path = require('path');

app.get('/hello.txt', function(req, res) {
  res.send('Hello World');
});

app.listen(8000);
console.log('Listening on port 8000');