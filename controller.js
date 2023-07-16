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



// menambahkan data buku
exports.tambahBuku = function(req, res){
  var title = req.body.title;
  var author = req.body.author;
  var publisher = req.body.publisher;
  var year = req.body.year;
  var page = req.body.page;
  var BookContents = req.body.BookContents;

  connection.query('INSERT INTO books (title, author, publisher, year, page, BookContents) VALUES (?, ?, ?, ?, ?, ?)', [title, author, publisher, year, page, BookContents], 
  function(error, rows, fileds){
    if(error){
      console.log(error);
    } else {
      response.ok("Berhasil menambah data",res);
    }
  });
};

// mengubah data berdasarkan id

exports.ubahData = function(req , res){
  var id = req.body.id;
  var title = req.body.title;
  var author = req.body.author;
  var publisher = req.body.publisher;
  var year = req.body.year;
  var page = req.body.page;
  var BookContents = req.body.BookContents;

  connection.query('UPDATE books SET title = ?, author = ?, publisher = ?, year = ?, page = ?, BookContents = ? WHERE id = ?', [title, author, publisher, year, page, BookContents, id],
  function(error, rows, fileds){
    if(error){
      console.log(error);
    } else {
      response.ok("Berhasil mengubah data",res);
    }
  });
};


