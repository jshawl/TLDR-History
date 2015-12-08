var request = require('request');
var EventPostModel = require("../models/eventPost")
var TldrModel = require("../models/tldr")



describe("adding a new event", function() {
  var post;
  beforeEach(function() {
    EventPostModel.remove({}, function(err){
      console.log(err)
    })
    TldrModel.remove({}, function(err){
      console.log(err)
    })

    request.post("http://localhost:3000/eventPosts",{
      form: {
        title: "my post title",
        date: "July 4, 1776",
        photoUrl: "http://someimage.com",
        wikiPage: "http://en.wikipedia.org/wiki/Independence_Day_(United_States)"
      }
    }, function(err, res, body){
      post = JSON.parse(body);
    })
  })

  it("should have a title", function() {
    expect(post.title).toEqual("my post title");
  });

  it("should have date", function() {

  });

  it("should have a photo url", function() {

  });

  it("should have a wikipedia link", function() {

  });

  it("should have a sub doc of TLDR summaries", function() {

  });

});
