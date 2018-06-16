var mongoose = require('mongoose');
var patientSchema = require('./patients.model')
var drugSchema = require('./drug.model')

var patientBillSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    patient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: patientSchema
    },
    date: Date,
    drugs: [{
        drug: {
            type: mongoose.Schema.Types.ObjectId,
            ref: drugSchema
        },
        qty: Number
    }],
    total: Number
})

module.exports = mongoose.model('patientBill', patientBillSchema)