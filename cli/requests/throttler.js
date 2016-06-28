const Immutable = require('immutable');
const List = Immutable.List;
const Map = Immutable.Map;

const requester = require('./requester');
const getSettings = require('../../lib/io').get_request_settings;

module.exports = function() {

}
getSettings().then((json) => {
  console.log('json', json);
  const requestList = List(json);
  // TODO: Check timestamp
  var idx = 0;
  setInterval(() => {
    const apiModule = Map(requestList.get(idx));
    if (apiModule !== 'sendmessage' && apiModule !== 'messages') {
      requester(apiModule)
        .then((xmlResponse) => {
          var parseString = require('xml2js').parseString;
          parseString(xmlResponse, function(err, result) {
            if (!err) {
              console.log(result);
            } else {
              throw err;
            }
          });
        });
    }
    if (idx === (requestList.size - 1)) {
      idx = 0;
    } else {
      ++idx;
    }
    // TODO: Block getting and sending of individual messages  
  }, 10000);

})

