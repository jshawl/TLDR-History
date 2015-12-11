var Tldr = function (info) {
  this.summary = info.summary;
  this.relevance = info.relevance;
  this.evenPostId = info._eventPostId;
  this.id = info._id;
};

Tldr.create = function(info, eventPostID){
  var self = this;
  var url = "/eventposts/"+eventPostID+"/tldrs";
  var request = $.ajax({
    url: url,
    method: "post",
    data: JSON.stringify(info),
    contentType: 'application/json'
  });
  console.log("VVV request");
  console.log(request);
  console.log("^^^^ Request");
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
