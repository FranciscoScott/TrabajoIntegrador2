const express = require('express');
const router = express.Router();
const ProductsControlers = require('../Controlers/ProductsControles')


router.get('/', ProductsControlers.index)

router.get('/add', ProductsControlers.index)

router.get('/detalle', ProductsControlers.Product)

module.exports = router 
