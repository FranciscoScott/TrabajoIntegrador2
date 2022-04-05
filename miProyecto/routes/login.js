const express = require('express');
const router = express.Router();
const loginControlers = require('../Controlers/loginControlers')


router.get('/', loginControlers.index)

router.get('/login',loginControlers.login)

router.get('/register',loginControlers.register)

module.exports = router ;
