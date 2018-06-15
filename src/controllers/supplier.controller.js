var mongoose = require('mongoose');
var Supplier = require('../models/supplier.model');

module.exports.getAllSuppliers = () => {
    return new Promise((resolve, reject) => {
        Supplier.find().exec().then(result => {
            resolve({
                status: 200,
                supplier: result
            });
        }).catch(err => {
            reject({
                status: 500,
                error: err
            });
        }) ;
    });
}

module.exports.getOneSupplier = (id) => {
    return new Promise((resolve, reject) => {
        Supplier.find({supplierID:id}).exec().then(result => {
            resolve({
                status: 200,
                supplier: result
            });
        }).catch(err => {
            reject({
                status: 500,
                error: err
            });
        }) ;
    });
}


module.exports.addSupplier = (suppliers) => {
    return new Promise((resolve, reject) => {
        const supplier =  new Supplier(suppliers);
        supplier.save(err => {
            if (err) {
                reject({
                    status: 500,
                    error: err
                });
            }
            resolve({
                status: 200,
                message: 'supplier added successfully'
            });
        });
    });
}


module.exports.updateSupplier = (id,supplier) => {
    return new Promise((resolve, reject) => {
        Supplier.findOneAndUpdate({supplierID:id},supplier).exec().then(result => {
            resolve({
                status: 200,
                supplier: result
            });
        }).catch(err => {
            reject({
                status: 500,
                error: err
            });
        }) ;
    });
}

module.exports.deleteSupplier = (id) => {
    return new Promise((resolve, reject) => {
        Supplier.findOneAndDelete({supplierID:id}).exec().then(result => {
            resolve({
                status: 200,
                supplier: result
            });
        }).catch(err => {
            reject({
                status: 500,
                error: err
            });
        }) ;
    });
}

