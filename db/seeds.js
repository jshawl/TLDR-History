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

var event1 = new EventPostModel({title: "[EVENT TITLE1]"})
var event2 = new EventPostModel({title: "[EVENT TITLE2]"})
var event3 = new EventPostModel({title: "[EVENT TITLE3]"})

var tldr1 = new TldrModel({body: "TLDR1!!"})
var tldr2 = new TldrModel({body: "TLDR2!!"})
var tldr3 = new TldrModel({body: "TLDR3!!"})
