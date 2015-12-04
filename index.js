var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require("body-parser");

// loads dependency that allows put and delete where not supported in html
var methodOverride = require('method-override')
// loads module containing all authors contrller actions. not defined yet...
var eventPostsController = require("./controllers/eventPostsController")

// connect mongoose interfaces to eventPosts mongo db
mongoose.connect('mongodb://localhost/tldr-history');

app.use(express.static(path.join(__dirname, "/public")));
app.use(bodyParser.json());

app.use("/eventPosts", require("./controllers/eventPosts"));
app.use("/tldrs", require("./controllers/tldrs"));

// allows for put/delete request in html form
app.use(methodOverride('_method'));

app.get("/", function(req, res){
  res.render("index.html");
});

app.listen(3000, function(){
 console.log("Listening on port 3000");
});
