'use strict';
module.exports = {
  app: require('./validation/app'),
  merchant: require('./validation/merchant'),
  certificate: require('./validation/certificate'),
  urls: {
    oauth: require('./validation/urls/oauth'),
    jssdk: require('./validation/urls/jssdk')
  },
  server: require('./server/')
};
