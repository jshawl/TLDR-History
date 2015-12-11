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
// connect mongoose interfaces to eventPosts mongo db
mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/tldr-history');

app.set('view engine', 'hbs');
app.set("views","./views");

app.use(express.static(path.join(__dirname, "/public")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('dev'));
app.use(cookieParser());

app.use(function (req, res, next) {
  global.currentUser = req.user;
  res.locals.currentUser = req.user;
  next();
});

app.use("/eventposts", require("./controllers/eventPosts"));
app.use("/tldrs", require("./controllers/tldrs"));
// var routes = require('./config/routes');
app.use("/users", require('./config/routes'));

// allows for put/delete request in html form
app.use(methodOverride('_method'));

app.use(session({ secret: 'TLDR-HISTORY' }));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

require('./config/passport')(passport);


// app.get("/login", function(req, res){
//   res.render();
// });



var port = process.env.PORT || 3000;
app.listen(port, function() {
console.log("Listening on " + port);
});
