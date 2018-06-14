var express = require('express')
var router = express.Router()

var patient = require('../controllers/patients.controller');

router.get('/' , (req, res) => {
    res.send('Welcome to patients route')
})

router.post('/', (req, res) => {
    patient.addPatient(req.body).then((response) => {
        res.status(response.status).send(response.message);
    });
});

module.exports = router;