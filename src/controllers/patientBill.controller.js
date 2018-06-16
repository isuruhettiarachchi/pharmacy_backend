var mongoose = require('mongoose');
var patientBillSchema = require('../models/patientBills.model');

module.exports.addPayment = (paymentDetails) => {
    return new Promise((resolve, reject) => {
        const payment1 = new patientBillSchema({
            _id: new mongoose.Types.ObjectId(),
            patient: paymentDetails.patient,
            drugs: paymentDetails.drugs,
            total: paymentDetails.total,
            date: Date.now()
    
        })
    
        payment1.save(err => {
            if (err) {
                reject({
                    status: 500,
                    err: err
                })
            }
            resolve({
                status: 200,
                message: 'payment successfull'
            })
        })
    })
}