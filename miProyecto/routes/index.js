const express = require('express');
const router = express.Router();
const indexControlers = require('../Controlers/indexControlers')

router.get('/',indexControlers.index)

router.get('/login',indexControlers.login)

router.get('/register',indexControlers.register)

router.get('/search-results', indexControlers.searchresults)


module.exports = router ;
