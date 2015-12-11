var mongoose = require("mongoose");
var bcrypt   = require('bcrypt-nodejs');
mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/tldr-history');

var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var TldrSchema = new Schema(
  {
    summary: String, // need to add 300 character limit
    relevance: String, // need to add 140 character limit
    eventPost: {type: ObjectId, ref: "EventPost"}
    // upvoting enabled later
  }
);
var EventPostSchema = new Schema(
  {
    title: String,
    date: String,
    photoUrl: String,
    wikiPage: String,
    tldrs: [{type: ObjectId, ref: "Tldr"}]
  }
);
var UserSchema = new Schema({
  local : {
    email        : String,
    password     : String,
  },
  twitter : {
    id: String,
    token: String,
    username: String,
    displayName: String
  }
});


UserSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.local.password);
};

UserSchema.methods.encrypt = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

var EventPostModel = mongoose.model("EventPost", EventPostSchema);
var TldrModel = mongoose.model("Tldr", TldrSchema);
var UserModel = mongoose.model("User", UserSchema);
