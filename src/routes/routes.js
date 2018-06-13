var express = require('express')
var router = express.Router()

var patients = require('./patients.route')
var supplier = require('./supplier.route');
var order = require('./order.route');

router.use('/patients', patients);
router.use('/supplier',supplier);
router.use('/order',order);

module.exports = router;