const express = require('express');
const router = express.Router();
const ProductsControlers = require('../Controlers/ProductsControles')




router.get('/', ProductsControlers.detail)

router.get('/add', ProductsControlers.add)

router.get('/edit', ProductsControlers.edit)

router.get('/:id?', ProductsControlers.detail);


module.exports = router