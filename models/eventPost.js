require("../db/schema");
// do you need this file? or any of your model files?
// check out lines 46-48 in schema.js
var mongoose = require("mongoose");
var EventPost = mongoose.model("EventPost");

module.exports = EventPost;
