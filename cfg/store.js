const Map = require('immutable').Map;

// for use during setup

exports.generateSkeleton = (userinfo = {}, conversation = [],
  order = [], sale = [], notification = []) => {
  return JSON.stringify(Map({ userinfo, conversation, order, sale, notification }).toJS());
};

