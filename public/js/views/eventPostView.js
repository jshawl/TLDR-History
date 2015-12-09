var EventPostView = function(eventpost){
  this.eventPost = eventpost;

  this.$el = $("<div class='eventPost well'></div>");
  this.render();

  $(".eventPosts").append(this.$el);
};

EventPostView.new = function(){
  // upon clicking create new Event post button, the button dissapears
  $(".formNewEventPost").show();
  $(".createEventPost").hide();

  var createButton = $(".createEventPostButton");
  var cancelButton = $(".cancelCreateEventPost");

  createButton.on("click", function(){
    // console.log("Create Button Clicked");
    var data = {  title: $('input[name=title]').val(),
                    date: $('input[name=date]').val(),
                    photoUrl: $('input[name=photoUrl]').val(),
                    wikiPage: $('input[name=wikiPage]').val()
                  };

    $(".formNewEventPost").hide();
    $(".createEventPost").show();
    EventPost.create(data);
  });

  cancelButton.on("click", function(){
    event.preventDefault();
    $(".formNewEventPost").hide();
    $(".createEventPost").show();
  });



};

EventPostView.prototype = {
  render: function(){
    var self = this;

    self.$el.html(self.eventPostTemplate(self.eventPost));

    var showButton = self.$el.find(".showTldrs");
    var editButton = self.$el.find(".editEventPost");
    var deleteButton = self.$el.find(".deleteEventPost");
    var tldrsDiv   = self.$el.find("div.tldrs");

    tldrsDiv.hide(); // hide div until it's populated with tldrs

    showButton.on("click", function(){
      self.toggleTldrs(tldrsDiv);
    });

    editButton.on("click", function() {
      self.renderEditForm();
    });

    deleteButton.on("click", function() {
      self.eventPost.destroy().then(function() {
        self.$el.fadeOut();
      });
    });

  },
  renderEditForm: function() {
    var self = this;
    self.$el.html(this.eventPostEditTemplate(this.eventPost));

    self.$el.find(".updateEventPost").on("click", function() {
      self.updateEventPost();
    });
  },
  toggleButton: function(tldrsDiv){
    if(tldrsDiv.is(":visible")){
      tldrsDiv.siblings("button.showTldrs").text("Hide Tlrds");
    } else {
      tldrsDiv.siblings("button.showTldrs").text("Show Tldrs");
    }
  },
  toggleTldrs: function(tldrsDiv){
    var self = this;
    // if not in DOM, populate
    if(tldrsDiv.children().length === 0){
      this.eventPost.fetchTldrs().then(function(tldrs){
        self.appendTldrs(tldrs, tldrsDiv);
      });
    }
    // toggle (note: tldrsDiv starts hidden)
    tldrsDiv.toggle();
    this.toggleButton(tldrsDiv);
  },
  appendTldrs: function(tldrs, tldrsDiv){
    tldrs.forEach(function(tldr){
      var tldrView = new TldrView(tldr);
      tldrsDiv.append(tldrView.render());
    });
  },
  updateEventPost: function() {
    var self = this;
    var data = {  title: $('input[name=title]').val(),
                  date: $('input[name=date]').val(),
                  photoUrl: $('input[name=photoUrl]').val(),
                  wikiPage: $('input[name=wikiPage]').val()
                };
    self.eventPost.update(data).then(function() { self.render(); });
  },
  eventPostTemplate: function(eventPost){
    var html = $("<div>");
    html.append("<h3>" + eventPost.title + "</h3>");
    html.append("<h4>" + eventPost.date + "</h4>");
    html.append("<img class='eventPost-photo' src='" + eventPost.photoUrl + "'> <br>");
    // htlm.append('<br>')
    html.append("<a href='" + eventPost.wikiPage + "' target='_blank'>Click Here to view the wikipage for this event</a> <br>");
    html.append("<button class='showTldrs btn btn-success'>Show Tldrs</button>");
    html.append("<button class='editEventPost btn btn-primary'>Edit Event</button>");
    html.append("<button class='deleteEventPost btn btn-danger'>Delete Event</button>");
    html.append("<div class='tldrs'></div>");
    return(html);
  },
  eventPostEditTemplate: function(eventPost) {
    var html = $("<div>");
    html.append("<input name='title' value='" + eventPost.title + "'>");
    html.append("<input name='date' value='" + eventPost.date + "'>");
    html.append("<img class='eventPost-photo-thumbnail' src='" + eventPost.photoUrl + "'>");
    html.append("<input name='photoUrl' value='" + eventPost.photoUrl + "'>");
    html.append("<input name='wikiPage' value='" + eventPost.wikiPage + "'>");
    html.append("<button class='updateEventPost'>Update Event</button>");
    return(html);
  },
};
