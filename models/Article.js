// Require mongoose
var mongoose = require("mongoose");


var Schema = mongoose.Schema;


var UserSchema = new Schema({
  title: {
    type: String,
    unique: true
  },
  link: {
    type: String,
    unique: true
  }
  notes: [{

    type: Schema.Types.ObjectId,
    ref: "Note"
  }]
});

// Create the User model with the UserSchema
var Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;
