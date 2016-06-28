const Promise = require('bluebird');
const openpgp = require('openpgp');
const random = $require('lib/randomizers');

exports.keygen = (passphrase) => {
  const numBits = 1024;
  const name = random.name();
  const email = random.email();

  // TODO: configure API/Options Signature Here. Be thoughtful about it
  return new Promise((resolve, reject) => {
    const options = {
      userIds: [{ name, email }],
      numBits,
      passphrase
    };

    openpgp.generateKey(options)
      .then(function(key, err) {
        if (err) reject(err);
        const privkey = key.privateKeyArmored;
        const pubkey = key.publicKeyArmored;
        resolve({ privkey, pubkey });
      }).catch((err) => {
        throw err;
      });
  });
};

exports.decryptApiKey = (options) => {
  return new Promise((resolve, reject) => {

  });
};

const fileRegistry = {
  default_settings: 'somefilepath/smilepath'
};

exports.encryptMessage = (pubkey, text) => {
  return new Promise((resolve, reject) => {
    var options = {
      data: text,
      publicKeys: openpgp.key.readArmored(pubkey).keys
    };

    openpgp.encrypt(options)
      .then(function(ciphertext) {
        resolve(ciphertext.data);
      })
      .catch((err) => {
        reject(err);
      });
    // encrypt with openpgp
    // save message to file system
  });
};

exports.decryptFile = (options) => {
  return new Promise((resolve, reject) => {

  });
};
