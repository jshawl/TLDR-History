require("../db/schema");
var mongoose = require("mongoose");
var EventPost = mongoose.model("EventPost");

module.exports = EventPost;
