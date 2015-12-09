var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

// loads dependency that allows put and delete where not supported in html
var methodOverride = require('method-override');
// loads module containing all authors contrller actions. not defined yet...
var eventPostsController = require("./controllers/eventPosts");

// connect mongoose interfaces to eventPosts mongo db
mongoose.connect('mongodb://heroku_8rq7jhsd:vqflfb439a98qsrv6oms0knov6@ds027825.mongolab.com:27825/heroku_8rq7jhsd');

app.use(express.static(path.join(__dirname, "/public")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.use("/eventPosts", require("./controllers/eventPosts"));
app.use("/tldrs", require("./controllers/tldrs"));

// allows for put/delete request in html form
app.use(methodOverride('_method'));


//
// app.listen(3000, function(){
//  console.log("Listening on port 3000");
// });

var port = process.env.PORT || 3000;
app.listen(port, function() {
console.log("Listening on " + port);
});

// mongodb://heroku_8rq7jhsd:vqflfb439a98qsrv6oms0knov6@ds027825.mongolab.com:27825/heroku_8rq7jhsd
