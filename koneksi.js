var mysql = require('mysql');

var conn = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'rest_api'
})

conn.connect((err)=>{
  if(err) throw err;
  console.log('Connected!');
})

module.exports = conn;