const { request } = require("express");

`use strict`;

var response = require('./res');
var connection = require('./koneksi');

exports.index = function(req, res){
  response.ok("rest api berjalan", res)
}