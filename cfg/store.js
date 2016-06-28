const Map = require('immutable').Map;

// for use during setup

exports.generateSkeleton = (userinfo = {}, conversation = [],
  order = [], sale = [], notification = []) => {
  return Map({ userinfo, conversation, order, sale, notification }).toJSON();
};

