var express = require('express');
var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname, 'src')));

var server = app.listen(8888, function () {

  var host = server.address().address;
  var port = server.address().port;

});