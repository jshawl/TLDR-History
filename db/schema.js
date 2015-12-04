var mongoose = require("mongoose");

var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var EventPostSchema = new Schema(
  {
    title: String,
    date: Date,
    photoUrl: String,
    wikiPage: String,
    tldrs: [{type: ObjectId, ref: "Tldr"}]
  }
);

var TldrSchema = new Schema(
  {
    summary: String, // need to add 300 character limit
    relevance: String, // need to add 140 character limit
    // upvoting enabled later
  }
);

var EventPostModel = mongoose.model("EventPost", EventPostSchema);
var TldrModel = mongoose.model("Tldr", TldrSchema);
