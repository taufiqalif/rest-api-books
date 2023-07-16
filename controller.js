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


// menampikan data berdasarkan id

exports.viewsid = function(req, res){
  let id = req.params.id;
  connection.query('SELECT * FROM books WHERE id = ?', [id], function(error, rows, fileds){
    if(error){
      connection.log(error);
    }else {
      response.ok(rows, res);
    }
  });
};



