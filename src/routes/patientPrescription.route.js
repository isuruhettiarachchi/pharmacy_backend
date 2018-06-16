var express = require('express')
var router = express.Router()

var prescription = require('../controllers/prescription.controller')
var patientPrescription = require('../controllers/patientPrescription.controller')

router.post('/', (req, res) => {
    prescription.addPrescription(req.body.prescription).then((prescriptionId) => {
        patientPrescription.addNewPrescription(req.body.patient, prescriptionId).then(response => {
            res.status(response.status).send(response);
        }).catch(err => {
            res.status(err.status).send(err);
        })
    })
})

router.get('/:patient', (req, res) => {
    patientPrescription.findAllPrescriptionsForPatient(req.params.patient).then(response => {
        res.status(response.status).send(response);
    }).catch(err => {
        res.status(err.status).send(err);
    })
})

module.exports = router;