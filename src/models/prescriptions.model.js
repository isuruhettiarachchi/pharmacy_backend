var mongoose = require('mongoose')
var drugsModel = require('./drug.model')

var prescriptionSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    date: Date,
    drugs: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: drugsModel
    }]
})

module.exports = mongoose.model('Prescription', prescriptionSchema)