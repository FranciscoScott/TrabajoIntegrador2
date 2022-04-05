const express = require('express');
const router = express.Router();
const ProductControlers = require('../Controlers/ProductControlers')


router.get('/', ProductControlers.index)

router.get('/login',ProductControlers.login)

router.get('/register',ProductControlers.register)

module.exports = router ;
