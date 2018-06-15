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

module.exports.addDrugCategory = (payload) => {
    console.log('drugCategory ', payload)
    return new Promise((resolve, reject) => {
        const drug_category =  new DrugCategory({
            _id: mongoose.Types.ObjectId(),
            categoryId: payload.categoryId,
            name: payload.name
        });

        drug_category.save(err => {
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

module.exports.updateDrugCategory = (drugCategory_Id, payload) => {
    return new Promise((resolve, reject) => {
        DrugCategory.update({categoryId:drugCategory_Id}, {$set: payload}).then(result => {
            resolve({
                status: 200,
                message: 'drug category updated successfully'
            });
        }).catch(err => {
            reject({
                status: 500,
                error: err
            });
        }) ;
    });
}

module.exports.deleteDrugCategory = (drugCategory_Id) => {
    return new Promise((resolve, reject) => {
        DrugCategory.findOneAndDelete({categoryId:drugCategory_Id}).then(result => {
            resolve({
                status: 200,
                message: 'drug category deleted successfully '
            });
        }).catch(err => {
            reject({
                status: 500,
                error: err
            });
        }) ;
    });
}