var mongoose = require('mongoose');

var Patient = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    paitentId: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    NIC: {
        type: String,
    },
    dateOfBirth: {
        type: Date,
        required: true
    },
    contactNumber: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Patient', Patient);