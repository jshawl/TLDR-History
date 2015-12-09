$(document).ready(function(){
  EventPost.fetch().then(function(eventposts){
    EventPost.all.forEach(function(eventpost){
      var view = new EventPostView(eventpost);
    });
  });

  $(".createEventPost").on("click", function(){
    $(".createEP").append(EventPostView.new());
  });
});
