'use strict';
module.exports = {
  /**
   * Init PKCS Certificate path
   * @param pkcs12
   */
  init: function(pkcs12, key) {
    var fs = require('fs');
    if (!fs.existsSync(pkcs12)) {
      throw Error('Certificate PKCS12 File Not Found!');
    }
    if (!key) {
      throw Error('Certificate Key Not Found!');
    }
    this.pkcs12 = pkcs12;
    this.key = key;
  }
};
