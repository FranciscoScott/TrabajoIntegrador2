const express = require('express')
const router = express.Router();
const indexController = require('../controlers/indexControlers')

router.get('/', indexController.index);













module.exports = router;