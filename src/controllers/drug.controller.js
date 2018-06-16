var mongoose = require('mongoose');
var DrugModel = require('../models/drug.model');
var DrugCategory = require('../models/drugCategory.model');
var Supplier = require('../models/supplier.model');

module.exports.getAllDrugs = () => {
    return new Promise((resolve, reject) => {
        DrugModel.find()
        .populate({ path: 'categoryId', model: DrugCategory })
        .populate({ path: 'supplier', model: Supplier })
        .exec().then(result => {
            // console.log(result.categoryId.name);
            resolve({
                status: 200,
                drugs: result
            });
        }).catch(err => {
            reject({
                status: 500,
                error: err
            });
        }) ;
    });
}

module.exports.getDrugsByCategory = (category_id) => {
    return new Promise((resolve, reject) => {
        DrugModel.find({categoryId:category_id}).exec().then(result => {
            resolve({
                status: 200,
                drugs: result
            });
        }).catch(err => {
            reject({
                status: 500,
                error: err
            });
        }) ;
    });
}

module.exports.addDrug = (drug) => {
    console.log('drug ', drug)
    return new Promise((resolve, reject) => {
        const Drug =  new DrugModel({
            _id: mongoose.Types.ObjectId(),
            categoryId: drug.categoryId,
            name: drug.name,
            price: drug.price,
            remarks: drug.remarks,
            dangerLevel: drug.dangerLevel,
            reorderLevel: drug.reorderLevel,
            dosage: drug.dosage,
            frequency: drug.frequency,
            supplier: drug.supplier
        });

        Drug.save(err => {
            console.log('a', err);
            
            if (err) {
                reject({
                    status: 500,
                    error: err
                });
            }
            resolve({
                status: 200,
                message: 'drug added successfully'
            });
        });
    });
}

module.exports.updateDrug = (drug_Id, payload) => {
    return new Promise((resolve, reject) => {
        DrugModel.update({drugId:drug_Id}, {$set: payload}).then(result => {
            resolve({
                status: 200,
                message: 'drug updated successfully'
            });
        }).catch(err => {
            reject({
                status: 500,
                error: err
            });
        }) ;
    });
}

module.exports.deleteDrug = (drug_Id) => {
    return new Promise((resolve, reject) => {
        DrugModel.findOneAndDelete({drugId:drug_Id}).then(result => {
            resolve({
                status: 200,
                message: 'drug deleted successfully'
            });
        }).catch(err => {
            reject({
                status: 500,
                error: err
            });
        }) ;
    });
}
