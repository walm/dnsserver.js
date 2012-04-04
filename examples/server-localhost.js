#!/usr/bin/env node

var dnsserver = require('../lib/dnsserver');

var server = dnsserver.createServer();
server.bind(20560, '127.0.0.1');

server.on('request', function(req, res) {
  var question = req.question;
  res.addRR(question.name, 1, 1, 3600, '127.0.0.1');
  res.send();
});

server.on('error', function(e) {
  throw e;
});
