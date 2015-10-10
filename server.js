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

var middleware = {
    requireAuthentication: function(req, res, next){
        console.log('private route hit!');
        next();
    },
    logger: function (req, res, next){
      //  console.log(new Date().toString());
        console.log('Request: ' + new Date().toString() + ' ' + req.method + ' ' + req.originalUrl);
        next();
    }
};

app.use(middleware.logger);

//app.use(middleware.requireAuthentication);


app.get('/about', middleware.requireAuthentication, function(req, res){
      res.send('This is about page');
});


app.use(express.static(__dirname + '/public'));


app.listen(port, function(){
    console.log('Express server has started on port: ' + port + ".");
});
