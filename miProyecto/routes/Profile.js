const express = require('express');
const ProfileRouter = express.Router();


router.get('/', function(req, res, next) {
  res.render('Profile', { title: 'Profile' });
});

module.exports = ProfileRouter ;
