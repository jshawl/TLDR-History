var request = require('request');

describe("an event", function() {

  it("should have a title", function(next) {
    request.post("http://localhost:3000/eventPosts",{
      form: {
        title: "my post title"

      }
    }, function(err, res, body){
      var post = JSON.parse(body);
      expect(post.title).toEqual("my post title");
      next();
    })
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
