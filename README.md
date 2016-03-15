# node-weixin-config [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]
> Weixin configuration module

微信校验配置模块是
([node-weixin-api](https://github.com/node-weixin/node-weixin-api)
或者
[node-weixin-express](https://github.com/node-weixin/node-weixin-express))
的一个子项目。

它用来校验配置信息, 通过调用各配置的init函数来验证参数的合法性。

交流QQ群: 39287176

注:

 [node-weixin-express](https://github.com/node-weixin/node-weixin-express)是基于node-weixin-*的服务器端参考实现。

 [node-weixin-api](https://github.com/node-weixin/node-weixin-api)是基于node-weixin-*的API接口SDK。

 它们都是由下列子项目组合而成:

 1. [node-weixin-config](https://github.com/node-weixin/node-weixin-config)
    用于微信配置信息的校验

 2. [node-weixin-auth](https://github.com/node-weixin/node-weixin-auth)
    用于与微信服务器握手检验

 3. [node-weixin-util](https://github.com/node-weixin/node-weixin-util)
    一些常用的微信请求，加密，解密，检验的功能与处理

 4. [node-weixin-request](https://github.com/node-weixin/node-weixin-request)
    微信的各类服务的HTTP请求的抽象集合

 5. [node-weixin-oauth](https://github.com/node-weixin/node-weixin-oauth)
    微信OAuth相关的操作

 6. [node-weixin-pay](https://github.com/node-weixin/node-weixin-pay)
    微信支付的服务器接口

 7. [node-weixin-jssdk](https://github.com/node-weixin/node-weixin-jssdk)
    微信JSSDK相关的服务器接口

 8. [node-weixin-menu](https://github.com/node-weixin/node-weixin-menu)
    微信菜单相关的操作与命令

 9. [node-weixin-user](https://github.com/node-weixin/node-weixin-user)
    微信用户API

10. [node-weixin-media](https://github.com/node-weixin/node-weixin-media)
    微信多媒体API

11. [node-weixin-qrcode](https://github.com/node-weixin/node-weixin-qrcode)
    微信二维码API



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

Apache-2.0 © [calidion](calidion.github.io)


[npm-image]: https://badge.fury.io/js/node-weixin-config.svg
[npm-url]: https://npmjs.org/package/node-weixin-config
[travis-image]: https://travis-ci.org/node-weixin/node-weixin-config.svg?branch=master
[travis-url]: https://travis-ci.org/node-weixin/node-weixin-config
[daviddm-image]: https://david-dm.org/node-weixin/node-weixin-config.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/node-weixin/node-weixin-config
[coveralls-image]: https://coveralls.io/repos/node-weixin/node-weixin-config/badge.svg
[coveralls-url]: https://coveralls.io/r/node-weixin/node-weixin-config
