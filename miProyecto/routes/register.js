const express = require('express');
const router = express.Router();
const registerControlers = require('../Controlers/RegisterControlers')


router.get('/', registerControlers.index)

router.get('/login',registerControlers.login)

router.get('/register',registerControlers.register)


module.exports = router ;
