var mongoose = require('mongoose');

var drugCategorySchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    categoryId: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('DrugCategory', drugCategorySchema);