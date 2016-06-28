exports.name = () => {
  var firstNameLength = getRandomInt(5, 10),
    lastNameLength = getRandomInt(10, 15);
  return generateRandomWord(firstNameLength) + ' ' + generateRandomWord(lastNameLength);
};

exports.email = () => {
  var usernameLength = getRandomInt(5, 35);
  var hostLength = getRandomInt(5, 10);
  return generateRandomWord(usernameLength) + '@' + generateRandomWord(hostLength) + '.com';
};

exports.comment = () => {
  var commentLength = getRandomInt(5, 15);
  return generateRandomPhrase(commentLength);
};

function generateRandomWord(len) {
  var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz';
  var str = '';
  while (len) {
    str += chars.charAt(getRandomInt(0, chars.length));
    len--;
  }
  return str;
}

function generateRandomPhrase(len) {
  var strArr = [];
  while (len) {
    var wordLength = getRandomInt(5, 15);
    strArr.push(generateRandomWord(wordLength));
    len--;
  }
  return strArr.join(' ');
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}