var mongoose = require('mongoose');
var drugModel = require('../models/drug.model')
var Stock = require('../models/inventory.model');

module.exports.getAllStock = () => {
    return new Promise((resolve, reject) => {
        Stock.find().populate({ path: 'DrugId', model: drugModel}).exec().then(result => {
            resolve({
                status: 200,
                stock: result
            });
        }).catch(err => {
            reject({
                status: 500,
                error: err
            });
        }) ;
    });
}

module.exports.getOneStock = (drug_id,batch_id) => {
    return new Promise((resolve, reject) => {
        Stock.find({"DrugID":drugID,"bacthID":batch_id}).populate({ path: 'DrugID', model: drugModel}).exec().then(result => {
            resolve({
                status: 200,
                stock: result
            });
        }).catch(err => {
            reject({
                status: 500,
                error: err
            });
        }) ;
    });
}


module.exports.addStock = (newStock) => {
    return new Promise((resolve, reject) => {
        const stock =  new Stock(newStock);
        stock.save(err => {
            if (err) {
                reject({
                    status: 500,
                    error: err
                });
            }
            resolve({
                status: 200,
                message: 'stock added successfully'
            });
        });
    });
}


module.exports.updateStock = (drug_id,batch_id,qty) => {
    var updating_stock;
    return new Promise((resolve, reject) => {
        Stock.find({DrugID:drugID,bacthID:batch_id}).then(data=>{
            updating_stock=data
        });
        Stock.findOneAndUpdate({DrugID:drug_id,batchID:batch_id},updating_stock).exec().then(result => {
            resolve({
                status: 200,
                stock: result
            });
        }).catch(err => {
            reject({
                status: 500,
                error: err
            });
        }) ;
    });
}


