var v = require('node-form-validator');
module.exports = {
  init: function (oauth) {
    var conf = require('../validators/urls/oauth');
    var error = {};
    if (!v.validate(oauth, conf, error)) {
      throw Error('Invalid oauth data: ' + JSON.stringify(error));
    }
  }
};
