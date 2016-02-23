var express = require('express');

var dir = process.argv[2];
var port = 8080;
var app = express();

app.use(express.static(dir));
app.listen(port);

console.log('\n Serving directory /' + dir + ' on port ' + port);