const express = require('express');
const router = express.Router();
const ProfileControlers = require('../Controlers/ProfileControles')


router.get('/', ProfileControlers.index)

router.get('/detalle', ProfileControlers.Profile)



module.exports = router ;
