const express = require('express');
const router = express.Router();
const indexControlers = require('../Controlers/indexControlers');
const profileControlers = require('../Controlers/ProfileControles')

router.get('/',indexControlers.index)

router.get('/login', profileControlers.login)

router.get('/register', profileControlers.register)

router.get('/search-results', indexControlers.searchresults)


module.exports = router ;
