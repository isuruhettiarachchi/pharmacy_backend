var mongoose = require('mongoose');

var drugSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    drugId: {
        type: Number,
        required: true,
    },
    categoryId: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    remarks: {
        type: String,
    },
    dangerLevel: {
        type: Number,
        required: true
    },
    reorderLevel: {
        type: Number,
        required: true
    },
    dosage: {
        type: String,
    },
    frequency: {
        type: String,
    },
    supplier: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Drug', drugSchema);