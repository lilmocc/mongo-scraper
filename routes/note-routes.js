var db = require("../models");

module.exports = function(app) {
app.get("/notes", function(req, res) {
  Note.find({}, function(error, doc) {

    if (error) {
      res.send(error);
    }
    else {
      res.send(doc);
    }
  });
});
}
