var express = require('express')
var router = express.Router()

var patients = require('./patients.route')
var supplier = require('./supplier.route');
var order = require('./order.route');
var drug = require('./drug.route');
var drugCategory = require('./drugCategory.route');
var pharmacists = require('./pharmacists.route');
var reports = require('./reports.route')
var prescription = require('./patientPrescription.route')

router.use('/patients', patients);
router.use('/supplier',supplier);
router.use('/order',order);
router.use('/pharmacists', pharmacists);
router.use('/reports', reports);
router.use('/drug',drug);
router.use('/drugCategory',drugCategory);
router.use('/prescriptions', prescription)
// router.use('/pharmacists', pharmacists);
// router.use('/reports',reports);

module.exports = router;