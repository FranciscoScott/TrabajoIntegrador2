const express = require('express');
const router = express.Router();


router.get('/', function(req, res) {
  res.render('Register', { title: 'Register' } );
});

module.exports = router ;
