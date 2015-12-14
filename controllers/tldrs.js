var express = require("express");
var router = express.Router();
var EventPost = require("../models/eventPost");
var Tldr = require("../models/tldr");

function error(response, message){
  // remove this function
  response.status(500);
  response.json({error: message});
}

router.get("/", function(req, res){
  Tldr.find({}).populate("eventPost", "title").then(function(tldrs){
    res.json(tldrs);
  });
});

router.get("/:id", function(req, res){
  Tldr.findById(req.params.id).populate("eventPost", "title").then(function(tldr){
    res.json(tldr);
  });
});

router.put("/:id", function(req, res){
  Tldr.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true}).then(function(tldr){
    res.json(tldr);
  });
});

router.delete("/:id", function(req, res){
  Tldr.findById(req.params.id).then(function(tldr){
  // or findByIdAndRemove - http://mongoosejs.com/docs/api.html#model_Model.findByIdAndRemove

    console.log("hi delete function");
    return tldr.remove();
  })
  .then(function(){
    res.json({success: true});
  });
});

module.exports = router;
