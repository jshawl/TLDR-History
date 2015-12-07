$(document).ready(function(){
  EventPost.fetch().then(function(eventposts){
    EventPost.all.forEach(function(eventposts){
      var view = new EventPostView(eventpost)
      view.render();
    })
  })
});
