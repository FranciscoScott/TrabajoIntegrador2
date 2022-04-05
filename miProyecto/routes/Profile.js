const express = require('express');
const router = express.Router();
const ProfileControlers = require('../Controlers/ProfileControlers')


router.get('/', ProfileControlers.index)

router.get('/login',ProfileControlers.login)

router.get('/register',ProfileControlers.register)




module.exports = router ;
