const express = require('express');
const router = express.Router();
const searchResultsController = require('../controlers/searchResultsControllers');



router.get('/', searchResultsController.findProduct);






module.exports = router;