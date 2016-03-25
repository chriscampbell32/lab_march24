var express = require('express');
var app = express();
var logger = require('morgan');
var PORT = 3000;

app.use(logger('dev'));
app.use(express.static(__dirname + "/public"));

app.listen(PORT, function(){
    console.log("listening on port: " + PORT);
});