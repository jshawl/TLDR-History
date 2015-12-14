require('./db/schema');
var express      = require('express');
var app          = express();
var mongoose     = require('mongoose');
var passport     = require('passport');
var flash        = require('connect-flash');
var hbs          = require("hbs");
var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session      = require('express-session');
var path         = require("path");
var env          = require("./env");
// loads dependency that allows put and delete where not supported in html
var methodOverride = require('method-override');
// loads module containing all authors contrller actions. not defined yet...
var eventPostsController = require("./controllers/eventPosts");
var usersController = require("./controllers/users");
// connect mongoose interfaces to eventPosts mongo db


app.set('view engine', 'hbs');
app.set("views","./views");

app.use(express.static(path.join(__dirname, "/public")));
app.use(bodyParser.json()); //do we need bodyparser() separately from these two?
// I don't think so... honestly I've never used bodyParser() before (the invoked form)
app.use(bodyParser.urlencoded({extended: true}));
// morgan allows us see the http requests logged to our console
app.use(morgan('dev'));
app.use(cookieParser());

app.use(function (req, res, next) {
  global.currentUser = req.user; // do we need this? no
  res.locals.currentUser = req.user;
  next();
});

app.use(session({ secret: 'TLDR-HISTORY' })); // recommend moving session secret to environment variable
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
// allows for put/delete request in html form
app.use(methodOverride('_method'));
require('./config/passport')(passport); // having trouble setting up locally
// please include API-related instructions and what needs to be provided in env.js
// but good to see you working on Twitter auth!!

// EventPost and Tldr routes
app.use("/eventposts", require("./controllers/eventPosts"));
app.use("/tldrs", require("./controllers/tldrs"));

// User Routes
app.get("/signup", usersController.getSignup);
app.post("/signup", usersController.postSignup);
app.get("/login", usersController.getLogin);
app.post("/login", usersController.postLogin);
app.get("/logout", usersController.getLogout);

app.get("/auth/twitter", usersController.twitter);
app.get("/auth/twitter/callback", usersController.twitterCallback);
// recommend being consistent with defining routes. 
// lines 50-51 vs 54-61


var port = process.env.PORT || 3000;
app.listen(port, function() {
console.log("Listening on " + port);
});


function authenticatedUser(req, res, next) {
  // where is this function being used? saw this in someone else's project, too.
  // If the user is authenticated, then we continue the execution
  if (req.isAuthenticated()) return next();

  // Otherwise the req is always redirected to the home page
  res.redirect('/');
}
