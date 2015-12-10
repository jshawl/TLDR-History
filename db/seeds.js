var mongoose = require('mongoose');
var conn = mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/tldr-history');
var EventPostModel = require("../models/eventPost");
var TldrModel = require("../models/tldr");

EventPostModel.remove({}, function(err){
  console.log(err);
});
TldrModel.remove({}, function(err){
  console.log(err);
});

var event1 = new EventPostModel({
    title: "Fourth of July",
    date: "July 4, 1776",
    photoUrl: "http://cdn.history.com/sites/2/2013/11/jefferson-drafts-declaration-hero-A.jpeg",
    wikiPage: "https://en.wikipedia.org/wiki/Independence_Day_(United_States)"
  });

event1.save();

var event2 = new EventPostModel({
    "title": "Boston Tea Party",
    "date": "December 16, 1773",
    "photoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Boston_Tea_Party_w.jpg/300px-Boston_Tea_Party_w.jpg",
    "wikiPage": "https://en.wikipedia.org/wiki/Boston_Tea_Party"
  });

event2.save( function(err){
  if (!err){
  console.log("EVENT SAVED");
  }
});

var event3 = new EventPostModel( {
    "title": "Midnight Ride of Paul Revere",
    "date": "April 7, 1775",
    "photoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Paul_Revere%27s_ride.jpg/220px-Paul_Revere%27s_ride.jpg",
    "wikiPage": "https://en.wikipedia.org/wiki/Paul_Revere#.22Midnight_Ride.22"
  });

event3.save();

var event4 = new EventPostModel({
  title: "Pearl Harbor Day",
  date: "December 7, 1941",
  photoUrl: "https://40.media.tumblr.com/6375b044364724a590305494fa56562d/tumblr_mh1rj198rZ1rmzffko1_400.jpg",
  wikiPage: "https://en.wikipedia.org/wiki/Attack_on_Pearl_Harbor"
})

event4.save();

var tldr1 = new TldrModel({
      "summary": "America's birthday. The Continental Congress got together and sent the King George III the signed Decloration of Independence.",
      "relevance": "America's birthday/excuse for bbq parties and fireworks"
    });

tldr1.save();

var tldr2 = new TldrModel({
      "summary": "The founding fathers send a breakup letter to the British Empire via the Decloration of Independence.",
      "relevance": "FIREWORKS DAY in America, also America's anniversery."
    });

tldr2.save();

var tldr3 = new TldrModel({
      "summary": "AKA Independence Day - Day when Continental Congress got together and signed the Declaration of Independence.",
      "relevance": "Day America split up from the British Empire."
    });

tldr3.save();


var tldr4 = new TldrModel({
  summary: "Japan was trying to get resources from Southeast Asia and the US said hell no, if you go attack Southeast Asia well attack you! So they thought they could catch us with our pants down and decimate our fleet at Pearl Harbor and Then go get the resources they needed in Indonesia and other places.",
  relevance: "This event provoked the US to enter World War II AND long story short we dropped atom bombs on Japan"
})

tldr4.save();

event1.tldrs.push(tldr1, tldr2, tldr3);
event4.tldrs.push(tldr4);
