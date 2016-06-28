module.exports = [{
  type: 'input',
  name: 'apikey',
  message: 'What is your API key (will only be stored encrypted)',
  validate: (providedKey) => {
    // TODO: Validate for character length, and only numbers
    return true;
  }
}, {
    type: 'password',
    name: 'pgp_pass',
    message: 'We will be generating a new PGP keypair to encrypt your API and other stored files. Please provide a password we can use to generate the private key. (You will need to remember this and use it regularly.)',
    validate: (providedKey) => {
      // TODO: Encourage length be longer than 16 or something. May want to validate it.
      return true;
    }
  }, {
    type: 'checkbox',
    name: 'modules',
    message: 'What modules do you have accessible? (Please refer to the "Manage API" screen to ensure you answer this correctly. If you do not, you could be locked out of the API service.)',
    choices: ['messages', 'notifications', 'userinfo'],
    validate: (providedKey) => {
      // TODO: May want to require at least one.
      return true;
    }
  }, {
    type: 'confirm',
    name: 'begin_keygen',
    message: 'We will now generate the keypair. It may take a few minutes. Would you like to proceed?',
    validate: (providedKey) => {
      // TODO: Make sure they say yes.
      return true;
    }
  }];