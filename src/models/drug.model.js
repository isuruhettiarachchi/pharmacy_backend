var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment-fix');
var DrugCategory = require('../models/drugCategory.model');
var Supplier = require('../models/supplier.model');

autoIncrement.initialize(mongoose);

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
        type: mongoose.Schema.Types.ObjectId,
        ref: DrugCategory,
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
        type: mongoose.Schema.Types.ObjectId,
        ref: Supplier,
        required: true
    }
})

drugSchema.plugin(autoIncrement.plugin, {
    model: 'drugSchema',
    field: 'drugId',
    startAt: 1,
    incrementBy: 1
});

module.exports = mongoose.model('Drug', drugSchema);