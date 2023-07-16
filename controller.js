const { request } = require("express");

`use strict`;

var response = require('./res');
var connection = require('./koneksi');

exports.index = function(req, res){
  response.ok("rest api berjalan", res)
}

// tampikan semua data dari database

exports.views = function(req, res){
  connection.query('SELECT * FROM books', function(error, rows, fileds){
    if(error){
      connection.log(error);
    }else {
      response.ok(rows, res);
    }
  });
};