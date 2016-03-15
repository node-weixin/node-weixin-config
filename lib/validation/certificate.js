'use strict';
module.exports = {
  /**
   * Init PKCS Certificate path
   * @param pkcs12
   */
  init: function (pkcs12, key) {
    if (pkcs12 instanceof Buffer) {
      this.initBuffer(pkcs12, key);
      return;
    }
    this.initFile(pkcs12, key);
  },
  initBuffer: function (pfx, pfxKey) {
    if (!(pfx instanceof Buffer === true)) {
      throw Error('pfx Not Buffer!');
    }
    if (!pfxKey) {
      throw Error('pfxKey Not Valid!');
    }
  },
  initFile: function (pkcs12, key) {
    var fs = require('fs');
    if (!fs.existsSync(pkcs12)) {
      throw Error('Certificate PKCS12 File Not Found!');
    }
    if (!key) {
      throw Error('Certificate Key Not Found!');
    }
  }
};
