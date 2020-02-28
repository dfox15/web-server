module.exports = middleware = { 
    requireAuthentication: function(req, res, next) {
        console.log('private route hit!');
        next();
    },
    logger: function(req, res, next) {
        var date = new Date().toString();
        console.log('Request: ' + req.method + ' ' + ' Date: ' + date + ' ' + req.originalUrl);
        next();
    }
};