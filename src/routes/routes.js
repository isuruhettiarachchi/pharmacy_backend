var express = require('express')
var router = express.Router()

var patients = require('./patients.route')

router.use('/patients', patients)

module.exports = router;