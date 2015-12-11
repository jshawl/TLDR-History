var passport = require("passport")
var express = require("express");
var User = require("../models/user");


var usersController = {
  getSignup: function(req, res){
    res.render("signup.hbs", { message: req.flash('signupMessage') });
  },
  postSignup(req, res){
    var signupStrategy = passport.authenticate('local-signup', {
      successRedirect : '/',
      failureRedirect : '/signup',
      failureFlash : true
    });
    return signupStrategy(req, res);
  },
  getLogin: function(req, res){
    res.render('login.hbs');
  },
  postLogin: function(req, res){
    var loginProperty = passport.authenticate('local-login', {
      successRedirect : '/',
      failureRedirect : '/login',
      failureFlash : true
    });
    return loginProperty(req, res);
  },
  getLogout: function(req, res){
    req.logout();
    res.redirect('/');
  },
  twitter: function(req, res){
    passport.authenticate('twitter');
  },
  twitterCallback: function(req, res){
    passport.authenticate('twitter', {
      successRedirect: '/',
      failureRedirect: '/login'
    });
  }
}

module.exports = usersController;
