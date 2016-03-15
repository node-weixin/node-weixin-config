var v = require('node-form-validator');
module.exports = {
  init: function (jssdk) {
    var conf = require('../validators/urls/jssdk');
    var error = {};
    if (!v.validate(jssdk, conf, error)) {
      throw Error('Invalid jssdk data: ' + JSON.stringify(error));
    }
  }
};
