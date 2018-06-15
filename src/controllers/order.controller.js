var mongoose = require('mongoose');
var Order = require('../models/order.model');

module.exports.getAllOrders = () => {
    return new Promise((resolve, reject) => {
        Order.find().exec().then(result => {
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

module.exports.getOneOrder = (id) => {
    return new Promise((resolve, reject) => {
        Order.find({orderID:id}).exec().then(result => {
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


module.exports.addOrder = (suppliers) => {
    return new Promise((resolve, reject) => {
        const order =  new Order(suppliers);
        order.save(err => {
            if (err) {
                reject({
                    status: 500,
                    error: err
                });
            }
            resolve({
                status: 200,
                message: 'order added successfully'
            });
        });
    });
}


module.exports.updateOrder = (id,order) => {
    return new Promise((resolve, reject) => {
        Order.findOneAndUpdate({orderID:id},order).exec().then(result => {
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

module.exports.deleteOrder = (id) => {
    return new Promise((resolve, reject) => {
        Order.findOneAndDelete({orderID:id}).exec().then(result => {
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

