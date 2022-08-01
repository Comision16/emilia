var express = require('express');
var router = express.Router();

const {about,contact} = require('../controllers/usersController')

/* /users */
router
  .get('/about', about )
  .get('/contact',contact)


module.exports = router;