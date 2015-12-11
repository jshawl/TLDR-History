$(document).ready(function(){
  userMenu();
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

  $('#logoClick').on('click', function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
  });

});


function userMenu() {
  var navbar = $("#user-menu");
  navbar.append("<ul>")
    // if (currentUser){
      navbar.append("<li><a href='/logout'>Logout</a></li<a>");
    // } else {
      navbar.append("<li><a href='/login'>Login</a></li>");
      navbar.append("<li><a href='/signup'>Signup</a></li>");
    // }
  navbar.append("</li>");
}
