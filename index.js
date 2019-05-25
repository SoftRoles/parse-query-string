/**
 * Authorize user ad guest if not previously registered 
 *
 * Examples:
 *
 *     app.use(authorizeGuest());
 *
*/

/**
* Module dependencies.
* @private
*/

const validator = require('validator');


/** 
* @return { Function }
* @api public
*/

module.exports = function parseQueryString() {
  return function (req, res, next) {
    console.log(req.query)
    for(key of Object.keys(req.query)){
      console.log(key)
      if(validator.isFloat(req.query[key])){
        req.query[key] = parseFloat(req.query[key])
      }
      else if(validator.isInt(req.query[key])){
        req.query[key] = parseInt(req.query[key])
      }
      else{
        req.query[key] = req.query[key]
      }
    }
    next()
  }
}
