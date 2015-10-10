// SERVER.JS
var express = require('express');
var app = express();
var port = 3000;

// two arguments.  Route plus anonymous function request and response
/*
app.get('/', function(req, res){
    res.send('Hello Express!');
});
*/

//move middleware function to another page
var middleware = require('./middleware.js');


app.use(middleware.logger);

//app.use(middleware.requireAuthentication);


app.get('/about', middleware.requireAuthentication, function(req, res){
      res.send('This is About Us!');
});


app.use(express.static(__dirname + '/public'));


app.listen(port, function(){
    console.log('Express server has started on port: ' + port + ".");
});
