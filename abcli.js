var path = require('path');

global.$require = function(localPath) {
  const fullPath = path.join(__dirname, localPath);
  return require(fullPath);
}

global.rootDir = __dirname;

// $require('cli/api/setup')();
// $require('cli/requests/throttler')();
// console.log($require('cfg/store').generateSkeleton());