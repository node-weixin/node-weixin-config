var v = require('node-form-validator');
module.exports = {
  init: function(app) {
    var conf = require('./validators/app');
    var error = {};
    if (!v.validate(app, conf, error)) {
      throw Error('Invalid app data: ' + JSON.stringify(error));
    }
    this.id = app.id;
    this.secret = app.secret;
    this.token = app.token;
  }
};
