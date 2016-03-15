var v = require('node-form-validator');
module.exports = {
  init: function (merchant) {
    var error = {};
    var conf = require('./validators/merchant');
    if (!v.validate(merchant, conf, error)) {
      throw Error('Invalid Merchant Data: ' + JSON.stringify(error));
    }
  }
};
