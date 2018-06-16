var express = require('express')
var router = express.Router()

var payment = require('../controllers/patientBill.controller');

router.post('/', (req, res) => {
    payment.addPayment(req.body).then(response => {
        res.status(response.status).send(response);
    }).catch(err => {
        res.status(err.status).send(err);
    })
})

module.exports = router;