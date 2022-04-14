const express = require('express');
const router = express.Router();
const ProfileControlers = require('../Controlers/ProfileControles')


router.get('/', ProfileControlers.Profile)

router.get('/edit', ProfileControlers.Profile)


module.exports = router ;
