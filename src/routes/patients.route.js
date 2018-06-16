var express = require('express')
var router = express.Router()

var patient = require('../controllers/patients.controller');

router.get('/' , (req, res) => {
    patient.getAllPatients().then(response => {
        res.status(response.status).send(response);
    }).catch(err => {
        res.status(err.status).send(err);
    })
})

router.post('/', (req, res) => {
    // console.log('b', req.body);
    patient.addPatient(req.body).then((response) => {
        console.log(response)
        res.status(response.status).send(response);
    }).catch(err => {
        console.log(err)
        res.status(err.status).send(err);
    });
});

router.delete('/:id', (req, res) => {
    patient.removePatient(req.param.id).then(response => {
        console.log(response)
        res.status(response.status).send(response);
    }).catch(err => {
        console.log(err);
        res.status(err.status).send(err);
    })
})

router.put('/:id', (req, res) => {
    patient.updatePatient(req.params.id, req.body).then(response => {
        res.status(response.status).send(response)
    }).catch(err => {
        res.status(err.status).send(err)
    })
})

module.exports = router;