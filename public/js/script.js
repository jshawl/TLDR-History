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
  });

  $('#logoClick').on('click', function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
  });

});


function userMenu() {
  var navbar = $("#user-menu");
  // recommend just hardcoding this menu in the HTML.
  navbar.append("<ul>")
    // if (currentUser){
      navbar.append("<li><a href='/logout' class='btn btn-danger'>Logout</a></li<a>");
    // } else {
      navbar.append("<li><a href='/login' class='btn btn-info'>Login</a></li>");
      navbar.append("<li><a href='/signup' class='btn btn-success'>Signup</a></li>");
    // }
  navbar.append("</ul>");
}
