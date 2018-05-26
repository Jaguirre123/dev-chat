var jwt = require('jsonwebtoken');
var SECRET = process.env.SECRET;

module.exports = function(req, res, next) {
  var token = req.get('Authorization') || req.query.token || req.body.token;
  if (token) {
    token = token.replace('Bearer ', '');
    jwt.verify(token, SECRET, function(err, decoded) {
      if (err) return next(err); 
        req.user = decoded.user;    
        next();
    });
  } else {
    next();
  }
};