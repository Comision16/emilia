var express = require('express');
var router = express.Router();
const {music} = require('../controllers/productsController')

/* /produts */
router.get('/music', music );

module.exports = router;