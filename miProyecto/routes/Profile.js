const express = require('express');
const ProfileRouter = express.Router();


router.get('/', function(req, res, next) {
  res.send('Profile',);
});

module.exports = ProfileRouter ;
