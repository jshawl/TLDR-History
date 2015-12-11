require('../db/schema');
var mongoose = require('mongoose');
var User = mongoose.model('User');
var bcrypt   = require('bcrypt-nodejs');

module.exports = User;
