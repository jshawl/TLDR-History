var mongoose = require("mongoose");
//mongoose oojs2 has mongoose connect here
// var conn = mongoose.connect('mongodb://localhost/tldr-history')

var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var TldrSchema = new Schema(
  {
    summary: String, // need to add 300 character limit
    relevance: String, // need to add 140 character limit
    eventPost: {type: ObjectId, ref: "EventPost"}
  }
);
var EventPostSchema = new Schema(
  {
    title: String,
    date: String,
    photoUrl: String,
    wikiPage: String,
    tldrs: [{type: ObjectId, ref: "Tldr"}]
  }
);


var EventPostModel = mongoose.model("EventPost", EventPostSchema);
var TldrModel = mongoose.model("Tldr", TldrSchema);
