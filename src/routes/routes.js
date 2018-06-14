var express = require('express')
var router = express.Router()

var patients = require('./patients.route')
var supplier = require('./supplier.route');
var order = require('./order.route');
var pharmacists = require('./pharmacists.route');
var reports = require('./reports.route')

router.use('/patients', patients);
router.use('/supplier',supplier);
router.use('/order',order);
// router.use('/pharmacists', pharmacists);
// router.use('/reports',reports);

module.exports = router;