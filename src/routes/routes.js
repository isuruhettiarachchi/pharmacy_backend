var express = require('express')
var router = express.Router()

var patients = require('./patients.route')
var supplier = require('./supplier.route');

router.use('/patients', patients);
router.use('/supplier',supplier);
router.use('/order',supplier);

module.exports = router;