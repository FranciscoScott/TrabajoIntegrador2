const express = require('express');
const ProductRouter = express.Router();


router.get('/', function(req, res, next) {
  res.send('Product',);
});

module.exports = ProductRouter ;
