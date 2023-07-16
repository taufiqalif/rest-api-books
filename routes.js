`use strict`;

module.exports = function(app) {
  var jsonku = require('./controller');

  app.route('/')
    .get(jsonku.index);

  app.route('/tampil')
    .get(jsonku.views);

  app.route('/tampil/:id')
    .get(jsonku.viewsid);

  app.route("/tambah")
    .post(jsonku.tambahBuku);

  app.route("/ubah")
    .put(jsonku.ubahData)
}