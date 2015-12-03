require("../db/schema");
var mongoose = require("mongoose");
var EventPostModel = mongoose.model("EventPost");

module.exports = EventPostModel;
