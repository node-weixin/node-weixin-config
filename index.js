'use strict';
module.exports = {
  app: require('./lib/app'),
  merchant: require('./lib/merchant'),
  certificate: require('./lib/certificate'),
  urls: {
    oauth: require('./lib/urls/oauth'),
    jssdk: require('./lib/urls/jssdk')
  }
};
