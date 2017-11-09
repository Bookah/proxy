var express = require('express'),
    request = require('request');

var app = express();

app.use('/api/', function(req, res) {
  console.log(req.url);
  req.pipe(request("http://localhost:8080" + req.url)).pipe(res);
});

app.use('/', function(req, res) {
  console.log(req.url);
  req.pipe(request("http://localhost:8081" + req.url)).pipe(res);
});

let listenPort = process.env.PORT || 3000

app.listen(listenPort);
console.log('listening on port ' + listenPort)
