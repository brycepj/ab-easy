const tor = require('tor-request');
const Promise = require('bluebird');
const requestFormatter = require('./format');
const requestValidator = require('./validate');

module.exports = function(queryObj) {
  return new Promise((resolve, reject) => {
    const validQueryObj = requestValidator(queryObj);
    const requestUrl = requestFormatter(validQueryObj);

    tor.request(requestUrl, function(err, res, body) {
      console.log("Request requestUrl:", requestUrl);
      if (!err && res.statusCode == 200) {
        resolve(body);
      } else {
        reject(err);
      }
    });
  })


}

/* 
TODO: Log the results!
TODO: Handle timeouts properly. May need to do some reading on this.
 */
