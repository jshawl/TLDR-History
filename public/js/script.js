$(document).ready(function(){
  $(".formNewEventPost").hide();
  EventPost.fetch().then(function(eventposts){
    EventPost.all.forEach(function(eventpost){
      var view = new EventPostView(eventpost);
    });
  });

  $(".createEventPost").on("click", function(){
    EventPostView.new();
    // $(".createEventPostButton").off();
  });
});
