const Promise = require('bluebird');
const env = $require('lib/env');
const fs = require('fs-extra');


function get_request_settings() {
  return getJsonFile(env.request_settings)
    .catch((err) => {
      console.error("An error occurred when reading request settings.", err);
    });
}

function get_request_defaults() {
  return getJsonFile(env.request_defaults)
    .catch((err) => {
      console.error("An error occurred when reading request defaults.");
    });
}

exports.saveFile = (path, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, data, (err) => {
      if (err) reject(err);
      resolve();
    });
  });
};

exports.removeFiles = (paths) => {
  return new Promise((resolve, reject) => {
    var promises = [];
    paths.forEach((path, idx) => {
      promises.push(removeFile(path));
    });
    return Promise.all(promises)
      .then(() => { resolve() })
      .catch((err) => { throw err });
  });
};

exports.removeFile = function removeFile(path) {
  return new Promise((resolve, reject) => {
    fs.remove(path, (err) => {
      if (err) reject(err);
      resolve();
    });
  });
};

function getJsonFile(path) {
  return new Promise((resolve, reject) => {
    fs.readJson(path, (err, json) => {
      if (err) reject(err);
      resolve(json);
    });
  });
}


exports.get_request_defaults = get_request_defaults;
exports.get_request_settings = get_request_settings;