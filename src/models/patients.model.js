var mongoose = require('mongoose');

var Patient = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
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
        type: String
    }
})

module.exports = mongoose.model('Patient', Patient);