// use modueles export to expose middleware


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

module.exports = middleware;
