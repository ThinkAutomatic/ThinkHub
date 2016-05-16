'use strict';

var td = require('thinkdevice');
var request = require('request');
var url = require('url');
var querystring = require('querystring');
var fs = require('fs');

td.connect({ name: 'Think Hub', deviceTypeUuid: 'ada8ffe3-0cfb-4506-9371-0f9d0e1403ca' }, function () { 
  console.log('Think Hub started');
});

function getDeviceSelector(device) {
  var deviceSelector = [];

  if (device) {
    if (device['uid'])
      deviceSelector['uid'] = device['uid'];
    if (device['deviceTypeUuid'])
      deviceSelector['deviceTypeUuid'] = device['deviceTypeUuid'];
  }  
  return deviceSelector;
}

td.on('message', function (message) {
  console.log(message);
  if (message['discovered']) {
    request.get(message['discovered'] + '/think?hubIp=' + td.localIp() + '&hubPort=' + td.localPort().toString(), { timeout: 5000 }, function(error, response, body) {
    });      
  }
  else if (message['device'] && message['device']['deviceId'] && 
          message['device']['deviceId'] != td.deviceConf()['deviceId'] &&
          message['device']['directUrl'] && message['action']) {
    request.get(message['device']['directUrl'] + '/think?' + querystring.stringify(message['action']), { timeout: 5000 }, function(error, response, body) {
    });    
  }
});

td.on('httpRequest', function (req, res) {
  var deviceSelector = [];
  var parsedUrl = url.parse(req.url);
  var params = querystring.parse(parsedUrl.query);

  console.log(parsedUrl.pathname);
  console.log(params);
  if (parsedUrl.pathname == '/favicon.ico') {
    var readStream = fs.createReadStream('favicon.ico');
    readStream.pipe(res);
  }
  else if (params) {
    params['hubId'] = td.deviceConf()['deviceId'];

    td.patch(getDeviceSelector(params), params, function(body) {
      if (body['directUrl']) {
        request.get(body['directUrl'] + '/think?' + querystring.stringify(body), { timeout: 5000 }, function(error, response, body) {
        });
      }
      res.writeHead(200, {"Content-Type": "text/html"});
      res.end();      
    });
  }
  else {
    res.writeHead(200, {"Content-Type": "text/plain"});
    if (parsedUrl.pathname == '/connect') {
      res.write('ThinkHub');
    }
    res.end();
  }
});
