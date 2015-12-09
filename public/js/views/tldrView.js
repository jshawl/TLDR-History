var TldrView = function(tldr){
  this.tldr = tldr;
  this.$el = $("<div class='tldrDiv well'></div>");
}

TldrView.prototype = {
  render: function(){
    var self = this;

    // var $el = $("<div class='tldrDiv well'></div>");
    // // self.$el.html(self.tldrTemplate(self.tldr));
    // var editButton = self.$el.find(".editTldr");
    // // var deleteButton = self.$el.find(".deleteTldr");
    //
    // editButton.on("click", function() {
    //   console.log("edit button clicked");
    //   self.tldrView.renderEditForm();
    // });

    // deleteButton.on("click", function() {
    //   self.tldr.destroy().then(function() {
    //     self.$el.fadeOut();
    //   });
    // });

    // note for team/self: problem is that TLDRs are being rendered as a callback
    // function on the eventPostView so this render function must return the $el
    // BUT doing it this way means we can't turn on the click listeners in the
    // render function the way we did with the eventPost.render. I think the listeners
    // have to be added on the eventPost.appendTldrs() function, but I'm having
    // a hard time identifying the right element for the click listener when it's
    // outside this render function. above code was as far as I got.

    var $el = $("<div class='tldrDiv well'><p class='tldrSummary'>TLDR: " + self.tldr.summary + "</p><p class='tldrRelevance'>WHY IT MATTERS: "+ self.tldr.relevance +"</p><button class='editTldr btn btn-primary'>Edit TLDR</button></div>");
    return($el)
  },
  renderEditForm: function() {
    var self = this;
    self.$el.html(this.tldrEditTemplate(this.tldr));

    self.$el.find(".updateTldr").on("click", function() {
      self.updateTldr();
    });
  },
  updateTldr: function() {
    var self = this;
    var data = {  summary: $('input[name=summary]').val(),
                  relevance: $('input[name=relevance]').val(),
                };
    self.tldr.update(data).then(function() { self.render(); });
  },
  tldrTemplate: function(tldr){
    var html = $("<div>");
    // html.append("<h3>TLDR</h3>");
    html.append("<p class='tldrSummary'>TLDR: " + tldr.summary + "</p>");
    // html.append("<h4>Why it matters:</h4>");
    html.append("<p class='tldrRelevance'>WHY IT MATTERS: "+ tldr.relevance +"</p>")
    // note to team/self: consider naming new, edit, delete buttons without specifying TLDR or Event so we only need to style once? Unless they need different styling..?
    html.append("<button class='editTldr btn btn-primary'>Edit TLDR</button>");
    // html.append("<button class='deleteTldr btn btn-info'>Delete Tldrs</button>"); //can't remember in bootstrap which category button we want - put info but is it alert?
    return(html);
  },
  tldrEditTemplate: function(tldr) {
    var html = $("<div>");
    html.append("<input name='summary' value='" + tldr.summary + "'>");
    html.append("<input name='relevance' value='" + tldr.relevance + "'>");
    html.append("<button class='updateTldr'>Update TLDR</button>");
    return(html);
  }
}
