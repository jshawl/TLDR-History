var Tldr = function (info) {
  this.summary = info.summary;
  this.relevance = info.relevance;
  this.evenPostId = info._eventPostId;
  this.id = info._id;
};

Tldr.create = function(){
  var self = this;
  var eventPostID = "your mom";
  var url = "/eventposts/"+eventPostID+"/tldrs";
  var request = $.ajax({
    url: url,
    method: "post",
    data: JSON.stringify(info),
    contentType: 'application/json'
  });
  return request;
};


Tldr.prototype = {
  destroy: function(){
    var self = this;
    var url = "/tldrs/" + self.id;
    var request = $.ajax({
      url: url,
      method: "delete",
      });
    return request;
  }
}
