var path = require('path');

exports.apikey = extendRoot('var/apikey.pgp');
exports.pubkey = extendRoot('var/pubkey.txt');
exports.privkey = extendRoot('var/privkey.txt');
exports.data = extendRoot('var/data.pgp');
exports.request_defaults = extendRoot('var/request_defaults.json');
exports.request_settings = extendRoot('var/request_settings.json');

function extendRoot(localPath) {
  return path.join(rootDir, localPath);
}