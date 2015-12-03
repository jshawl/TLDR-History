require("../db/schema");
var mongoose = require("mongoose");
var TldrModel = mongoose.model("Tldr");

module.exports = TldrModel;
