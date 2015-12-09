var Tldr = function (info) {
  this.summary = info.summary;
  this.relevance = info.relevance;
  this.evenPostId = info.eventPostId;
  this.id = info._id;
}

// Tldr.prototype = {
//   update: function(tldrData) {
//     var self = this;
//
//     // do we need to update this url for deployment?
//     var url = "http://localhost:3000/eventposts/" + this.eventPostId + "/" + this.id;
//     var request = $.ajax({
//       url: url,
//       method: "patch",
//       data: JSON.stringify(tldrData),
//       contentType: 'application/json'
//     }).then(
//       function(updatedTldrInfo) {
//         self.reload(updatedTldrInfo);
//       });
//     return request;
//   },
//   reload: function(newData) {
//     for (var attrname in newData) {
//       this[attrname] = newData[attrname];
//     }
//   },
// destroy: function(){
//     var self = this;
//     var url = "http://localhost:3000/eventposts/" + self.id;
//     var request = $.ajax({
//       url: url,
//       method: "delete",
//       });
//     return request;
//   }

}
