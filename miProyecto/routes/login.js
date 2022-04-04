const express = require('express');
const LoginRouter = express.Router();


router.get('/', function(req, res, next) {
  res.render('login', { title: 'Login' } );
});

module.exports = LoginRouter ;
