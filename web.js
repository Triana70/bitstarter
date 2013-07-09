var express = require('express');
var fs = require('fs');

var data = fs.readFileSync("./index.html");
buf = new Buffer(data);
var outdata = buf.toString();

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(outdata);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
