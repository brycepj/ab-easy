const prompt = require('inquirer').prompt;
const questions = $require('cli/api/questions');
const pgpFns = $require('lib/pgp');
const io = $require('lib/io');
const env = $require('lib/env');
const store = $require('cfg/store');

module.exports = function(argv) {
  prompt(questions).then((result) => {
    var apikey = result.apikey;
    var pw = result.pgp_pass;
    pgpFns.keygen(pw)
      .then((pgpkeys) => {
        // save public and private keys
        var savePubKey = io.saveFile(env.pubkey, pgpkeys.pubkey);
        var savePrivKey = io.saveFile(env.privkey, pgpkeys.privkey);
        var encryptApikey = Promise.all([savePubKey, savePubKey]).then(() => {
          pgpFns.encryptMessage(pgpkeys.pubkey, apikey)
            .then((ciphertext) => {
              return io.saveFile(env.apikey, ciphertext);
            });
        });
        return pgpkeys;
      })
      .then((pgpkeys) => {
        // generate new encrypted data file
        pgpFns.encryptMessage(pgpkeys.pubkey, store.generateSkeleton())
          .then((ciphertext) => {
            return io.saveFile(env.data, ciphertext);
          });
      });
  });
};


