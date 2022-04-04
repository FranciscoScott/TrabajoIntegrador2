const express = require('express');
const RegisterRouter = express.Router();


router.get('/', function(req, res, next) {
  res.render('Register', { title: 'Register' } );
});

module.exports = RegisterRouter ;
