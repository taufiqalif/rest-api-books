const { request } = require("express");

`use strict`;

var response = request('./res');
var connection = require('./koneksi');

exports.index = function(req, rea){
  response.ok("rest api berjalan")
}