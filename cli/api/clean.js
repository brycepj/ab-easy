const io = $require('lib/io');
const env = $require('lib/env');

module.exports = () => {

  const dataPath = env.data;
  const pubkeyPath = env.pubkey;
  const privkeyPath = env.privkey;
  const apikeyPath = env.apikey;

  io.removeFiles([dataPath, pubkeyPath, privkeyPath, apikeyPath])
    .then(() => {
      console.log("Project successfully cleaned.");
    });


};