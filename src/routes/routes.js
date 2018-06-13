var express = require('express')
var router = express.Router()

var patients = require('./patients.route')
var pharmacists = require('./pharmacists.route');
var reports = reqiure('./reports.route')

router.use('/patients', patients);

router.use('/pharmacists', pharmacists);

router.use('/reports',reports);

module.exports = router;