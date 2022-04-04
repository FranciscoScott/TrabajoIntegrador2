const express = require('express');
const ProductRouter = express.Router();


router.get('/', function(req, res, next) {
  res.render('Product', { title: 'Product' });
});

module.exports = ProductRouter ;
