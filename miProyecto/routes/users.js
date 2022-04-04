const express = require('express');
const usersRouter = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('respond with a resource');
});

module.exports = usersRouter;
