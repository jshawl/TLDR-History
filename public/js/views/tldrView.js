var TldrView = function(tldr){
  this.tldr = tldr;
};

TldrView.prototype = {
  render: function(){
    var self = this;
    var $el = $("<div class='tldrDiv" + self.tldr.id + " tldrDiv well'><p class='tldrSummary'>" + self.tldr.summary + "</p><p class='tldrRelevance'>"+ self.tldr.relevance +"</p><button class='deleteTldr" + self.tldr.id +" btn btn-danger'>Delete TLDR</button></div>");
    return($el);
  }
};



// var TldrView = function(tldr){
//   this.tldr = tldr;
//   this.$el = $("<div class='tldr well'></div>");
//   this.render();
//
//   $(".tldrs").append(this.$el); //how to append to only its parent div? this.eventPost?
// };
//
// // when the TLDRview is rendered (eventPostView.prototype), there should be buttons to edit, delete or create new
// // edit button should render edit template,
// // delete button should delete tldr and fade out
// // create new button should render new form, which has "create new" and "cancel" buttons
//     // eventually this should be a toggle function rather than hiding create button and adding cancel button
//
// // should go on EventPostView:
//     //rachel changes begin
//     var editButton = this.$el.find(".editTldr");
//     var deleteButton = this.$el.find(".deleteTldr");
//     // need to add click listeners
//     // rachel changes end
//
// TldrView.prototype = {
//   render: function(){
//     var self = this;
//     var $el = $("<div class='tldrDiv well'><p class='tldrSummary'>" + self.tldr.summary + "</p><p class='tldrRelevance'>"+ self.tldr.relevance +"</p></div>");
//     return($el);
//   }
// };
