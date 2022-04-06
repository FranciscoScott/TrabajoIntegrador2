const express = require('express');
const router = express.Router();
const ProductsControlers = require('../Controlers/ProductsControles')


router.get('/', ProductsControlers.index)

router.get('/login',ProductsControlers.login)

router.get('/register',ProductsControlers.register)

module.exports = router ;
