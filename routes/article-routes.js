var db = require("../models");

module.exports = function(app) {

app.get("/scrape", function(req, res) {
  request("https://www.reddit.com/r/webdev", function(error, response, html) {
	var $ = cheerio.load(html);
  	var result = {};
	$("p.title").each(function(i, element) {


    var title = $(this).text();

    var link = $(element).children().attr("href");
    var result = {};

    result.title = title;
    result.link = link;


      entry.save(function(err, doc) {

        if (err) {
          console.log(err);
        }

        else {
          console.log(doc);
        }
      });


	});
	res.send("Scrape Complete");
  });
});
}


app.get("/articles", function(req, res) {
  Article.find({}, function(error, doc) {
    if (error) {
      console.log(error);
    }
    else {
      res.json(doc);
    }
  });
});


app.post("/submit", function(req, res) {
  var newNote = new Note(req.body);
  newNote.save(function(error, doc) {
    if (error) {
      res.send(error);
    }

    else {
      Article.findOneAndUpdate({}, { $push: { "notes": doc._id } }, { new: true }, function(err, newdoc) {
        if (err) {
          res.send(err);
        }
        else {
          res.send(newdoc);
        }
      });
    }
  });
});
