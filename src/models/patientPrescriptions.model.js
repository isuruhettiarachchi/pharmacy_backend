var mongoose = require('mongoose');
var patientSchema = require('./patients.model')
var prescriptionSchema = require('./prescriptions.model')

var patientPrescription = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    patient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: patientSchema
    },
    prescriptions: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: prescriptionSchema
    }]
})

module.exports = mongoose.model('patientPrescription', patientPrescription)