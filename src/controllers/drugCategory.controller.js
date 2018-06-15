var mongoose = require('mongoose');
var DrugCategory = require('../models/drugCategory.model');

module.exports.getAllDrugCategories = () => {
    return new Promise((resolve, reject) => {
        DrugCategory.find().exec().then(result => {
            resolve({
                status: 200,
                drugCategories: result
            });
        }).catch(err => {
            reject({
                status: 500,
                error: err
            });
        }) ;
    });
}

module.exports.addDrugCategory = (drugCategory) => {
    console.log('drugCategory ', drugCategory)
    return new Promise((resolve, reject) => {
        const DrugCategory =  new DrugCategory({
            _id: mongoose.Types.ObjectId(),
            categoryId: drugCategory.categoryId,
            name: drugCategory.name
        });

        DrugCategory.save(err => {
            console.log('a', err);
            
            if (err) {
                reject({
                    status: 500,
                    error: err
                });
            }
            resolve({
                status: 200,
                message: 'drug category added successfully'
            });
        });
    });
}
