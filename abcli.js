var path = require('path');

global.$require = function(localPath) {
  const fullPath = path.join(__dirname, localPath);
  return require(fullPath);
}

global.rootDir = __dirname;

const clean = $require('cli/api/clean');
const setup = $require('cli/api/setup');

const args = process.argv.slice(2);
const cmd = args[0];

if (cmd === 'clean') {
  console.log("Cleaning");
  clean();
} else if (cmd === 'setup') {
  console.log("Setting up");
  setup();
} else if (cmd === 'run') {
  console.log("Running");
}

// $require('cli/api/setup')();
// $require('cli/requests/throttler')();
// console.log($require('cfg/store').generateSkeleton());