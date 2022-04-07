const express = require('express');
const router = express.Router();
const ProfileControlers = require('../Controlers/ProfileControles')


router.get('/', ProfileControlers.index)

router.get('/Profile', ProfileControlers.Profile)



module.exports = router ;
