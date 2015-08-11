#  [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]

> Weixin configuration module


## Install

```sh
$ npm install --save node-weixin-config
```


## Usage

```js


var nwc = require('node-weixin-config');

//Init app

var app = {
  id: 'asfd',
  secret: 'sfdsf',
  token: 'safsff'
};
nwc.app.init(app);

//Init Merchant

var merchant = {
  id: 'id',
  key: 'key',
};
nwc.merchant.init(merchant);

//Init SSL Certificate

var path = require('path');
var certificate = {
  pkcs12: path.resolve(__dirname, './certificate/apiclient_cert.p12'),
  key: 'key'
};
nwc.certificate.init(certificate.pkcs12, certificate.key);

//Init Oauth

var oauth = {
  //用户首次访问的URL地址
  access: 'http://oauth.domain.com/weixin/access',
  //用户通过验证后的返回地址
  redirect: 'http://oauth.domain.com/weixin/redirect',
  //成功获取用户openid后的地址
  success: 'http://pay.domain.com/successAndReadyToPay'
};

nwc.urls.oauth.init(oauth);

//JSSDK Init
var jssdk = {
  pay: 'http://oauth.domain.com/weixin/pay'
};
nwc.urls.jssdk.init(jssdk);
    
   
```


## License

MIT © [JSSDKCN](blog.3gcnbeta.com)


[npm-image]: https://badge.fury.io/js/node-weixin-config.svg
[npm-url]: https://npmjs.org/package/node-weixin-config
[travis-image]: https://travis-ci.org/JSSDKCN/node-weixin-config.svg?branch=master
[travis-url]: https://travis-ci.org/JSSDKCN/node-weixin-config
[daviddm-image]: https://david-dm.org/JSSDKCN/node-weixin-config.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/JSSDKCN/node-weixin-config
