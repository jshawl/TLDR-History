var mongoose = require('mongoose')
var conn = mongoose.connect('mongodb://localhost/tldr-history')
var EventPostModel = require("../models/eventPost")
var TldrModel = require("../models/tldr")
EventPostModel.remove({}, function(err){
  console.log(err)
})
TldrModel.remove({}, function(err){
  console.log(err)
})
