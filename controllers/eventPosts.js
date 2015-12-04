var express = require("express");
var router = express.Router();
var EventPost = require("../models/eventPost");
var Tldr = require("../models/tldr");

function error(response, message){
  response.status(500);
  response.json({error: message});
}

router.get("/", function(req, res){
  EventPost.find({}).populate("tldrs").then(function(eventPosts){
    res.json(eventPosts);
  });
});

router.post("/", function(req, res){
  new EventPost(req.body).save().then(function(eventPost){
    res.json(eventPost);
  });
});

router.get("/:id", function(req, res){
  EventPost.findById(req.params.id).populate("tldrs").then(function(eventPost){
    res.json(eventPost);
  });
});

router.get("/:id/tldrs", function(req, res){
  EventPost.findById(req.params.id).populate("tldrs").then(function(eventPost){
    res.json(eventPost.tldrs);
  });
});

router.patch("/:id", function(req, res){
  EventPost.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true}).then(function(eventPost){
    res.json(eventPost);
  });
});

router.delete("/:id", function(req, res){
  EventPost.findByIdAndRemove(req.params.id).then(function(){
    res.json({success: true});
  });
});

module.exports = router;
