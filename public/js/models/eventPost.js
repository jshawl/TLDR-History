var EventPost = function(info) {
  this.title = info.title;
  this.date = info.date;
  this.photoUrl = info.photoUrl;
  this.wikiPage = info.wikiPage;
  this.id = info._id;
};


EventPost.all = [];
EventPost.fetch = function() {
  var request = $.getJSON("http://localhost:3000/eventPosts")
    .then(function(response) {
      for (var i = 0; i < response.length; i++) {
        EventPost.all.push(new EventPost(response[i]));
      }
    })
    .fail(function(response) {
      console.log("js failed to load");
    });
  return request;
};


EventPost.prototype = {
  fetchTldrs: function() {
    var url = "http://localhost:3000/eventposts/" + this.id + "/tldrs";
    var request = $.getJSON(url)
      .then(function(response) {
        var tldrs = [];
        for (var i = 0; i < response.length; i++) {
          tldrs.push(new Tldr(response[i]));
        }
        return tldrs;
      })
      .fail(function(repsonse) {
        console.log("js failed to load");
      });
    return request;
  },
  update: function(eventPostData) {
    var self = this;

    var url = "http://localhost:3000/eventposts/" + this.id;
    var request = $.ajax({
      url: url,
      method: "patch",
      data: JSON.stringify(eventPostData),
      contentType: 'application/json'
    }).then(
      function(updatedEventPostInfo) {
        self.reload(updatedEventPostInfo);
      });
    return request;
  },
  reload: function(newData) {
    for (var attrname in newData) {
      this[attrname] = newData[attrname];
    }
  }
};
