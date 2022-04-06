const express = require('express');
const router = express.Router();
const ProfileControlers = require('../Controlers/ProfileControles')


router.get('/', ProfileControlers.index)





module.exports = router ;
