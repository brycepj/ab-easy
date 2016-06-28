const Map = require('immutable').Map;
const api = require('../../cfg/ep.json');

module.exports = function(queryMap) {
  const apiMap = Map(api);
  const queryModule = queryMap.get('module');
  const isValidModule = !!queryModule && apiMap.has(queryModule);
  if (isValidModule) {
    const moduleInterface = Map(apiMap.get(queryModule));
    // filter out any unknown params
    return queryMap.filter((value, key) => key === "module" 
      || moduleInterface.has(key))
      || value !== null;
  } else {
    throw Error("There is something wrong with your query params");
  }
}