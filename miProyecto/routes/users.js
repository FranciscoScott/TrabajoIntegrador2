const express = require('express');
const router = express.Router();
const usersControlers = require('../Controlers/usersControlers')


router.get('/', usersControlers.index)

router.get('/login',usersControlers.login)

router.get('/register',usersControlers.register)

module.exports = router;
