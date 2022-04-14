const express = require('express');
const router = express.Router();
const ProductsControlers = require('../Controlers/ProductsControles')




router.get('/add', ProductsControlers.add)

router.get('/detalle', ProductsControlers.detail)

router.get('/edit', ProductsControlers.edit)

module.exports = router 
