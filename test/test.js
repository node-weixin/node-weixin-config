'use strict';
var assert = require('assert');
var nwc = require('../');

describe('node-weixin-config tests', function () {

  it('should not be able to init app', function () {
    var app = {
      id: 'asfd',
      secret: 'sfdsf'
    };
    assert.throws(function() {
      nwc.app.init(app);
    }, function(err) {
      if(/Invalid app data: {"key":"token","reason":"Key token is NULL"}/.test(err)) {
        return true;
      }
      return false;
    });
  });

  it('should be able to init app', function () {
    var app = {
      id: 'asfd',
      secret: 'sfdsf',
      token: 'safsff'
    };
    nwc.app.init(app);
    assert.equal(true, true);
  });

  it('should not be able to init merchant', function () {
    var merchant = {
      id: 'asfd'
    };
    assert.throws(function() {
      nwc.merchant.init(merchant);
    }, function(err) {
      if(/Invalid Merchant Data: {"key":"key","reason":"Key key is NULL"}/.test(err)) {
        return true;
      }
      return false;
    });
  });

  it('should be able to init merchant', function () {
    var merchant = {
      id: 'id',
      key: 'key'
    };
    nwc.merchant.init(merchant);
    assert.equal(true, true);
  });

  it('should not be able to init merchant', function () {
    var merchant = {
      id: 'asfd'
    };
    assert.throws(function() {
      nwc.merchant.init(merchant);
    }, function(err) {
      if(/Invalid Merchant Data: {"key":"key","reason":"Key key is NULL"}/.test(err)) {
        return true;
      }
      return false;
    });
  });

  it('should not be able to init certificate', function () {
    var certificate = {};
    assert.throws(function() {
      nwc.certificate.init(certificate.pkcs12, certificate.key);
    }, function(err) {
      if(/Certificate PKCS12 File Not Found!/.test(err)) {
        return true;
      }
      return false;
    });
  });

  it('should not be able to init certificate', function () {
    var path = require('path');
    var certificate = {
      pkcs12: path.resolve(__dirname, './certificate/apiclient_cert.p12'),
      key: null
    };
    assert.throws(function() {
      nwc.certificate.init(certificate.pkcs12, certificate.key);
    }, function(err) {
      if(/Certificate Key Not Found!/.test(err)) {
        return true;
      }
      return false;
    });
  });

  it('should be able to init certificate', function () {
    var path = require('path');
    var certificate = {
      pkcs12: path.resolve(__dirname, './certificate/apiclient_cert.p12'),
      key: 'key'
    };
    nwc.certificate.init(certificate.pkcs12, certificate.key);
    assert.equal(true, true);
  });


  it('should not be able to init buffered certificate', function () {
    assert.throws(function() {
      nwc.certificate.initBuffer('sodfosfd', 'sfdsfd');
    }, function(err) {
      if(/pfx Not Buffer!/.test(err)) {
        return true;
      }
      return false;
    });
  });

  it('should not be able to init buffered certificate', function () {
    assert.throws(function() {
      nwc.certificate.initBuffer(new Buffer('safsfd'));
    }, function(err) {
      if(/pfxKey Not Valid!/.test(err)) {
        return true;
      }
      return false;
    });
  });

  it('should be able to init buffered certificate', function () {
    var path = require('path');
    var fs = require('fs');
    var buffer = fs.readFileSync(path.resolve(__dirname, './certificate/apiclient_cert.p12'));
    nwc.certificate.init(buffer, 'key');
    assert.equal(true, true);
  });



  it('should not be able to init oauth', function () {
    var oauth = {
      access: 'asfd'
    };
    assert.throws(function() {
      nwc.urls.oauth.init(oauth);
    }, function(err) {
      if(/Invalid oauth data: {"key":"access","reason":"Not validate key access"}/.test(err)) {
        return true;
      }
      return false;
    });
  });

  it('should not be able to init oauth', function () {
    var oauth = {
      access: 'http://oauth.domain.com/weixin/access'
    };
    assert.throws(function() {
      nwc.urls.oauth.init(oauth);
    }, function(err) {
      if(/Invalid oauth data: {"key":"redirect","reason":"Key redirect is NULL"}/.test(err)) {
        return true;
      }
      return false;
    });
  });

  it('should be able to init oauth', function () {
    var oauth = {
      //用户首次访问的URL地址
      access: 'http://oauth.domain.com/weixin/access',
      //用户通过验证后的返回地址
      redirect: 'http://oauth.domain.com/weixin/redirect',
      //成功获取用户openid后的地址
      success: 'http://pay.domain.com/successAndReadyToPay'
    };
    nwc.urls.oauth.init(oauth);
    assert.equal(true, true);
  });

  it('should not be able to init jssdk', function () {
    var jssdk = {
    };
    assert.throws(function() {
      nwc.urls.jssdk.init(jssdk);
    }, function(err) {
      if(/Invalid jssdk data: {"key":"pay","reason":"Key pay is NULL"}/.test(err)) {
        return true;
      }
      return false;
    });
  });

  it('should not be able to init jssdk', function () {
    var jssdk = {
      pay: 'aaa'
    };
    assert.throws(function() {
      nwc.urls.jssdk.init(jssdk);
    }, function(err) {
      if(/Invalid jssdk data: {"key":"pay","reason":"Not validate key pay"}/.test(err)) {
        return true;
      }
      return false;
    });
  });

  it('should be able to init jssdk', function () {
    var jssdk = {
      pay: 'http://oauth.domain.com/weixin/pay'
    };
    nwc.urls.jssdk.init(jssdk);
    assert.equal(true, true);
  });
});
