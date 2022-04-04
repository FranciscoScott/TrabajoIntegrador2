const express = require('express');
const router = express.Router();


router.get('/', function(req, res) {
  res.render('Product', { title: 'Product' });
});

module.exports = router ;
