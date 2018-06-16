var mongoose = require('mongoose')
var prescriptionSchema = require('../models/prescriptions.model');

module.exports.addPrescription = (prescription) => {
    console.log('prescription ctrl', prescription)
    return new Promise((resolve, reject) => {
        let id = mongoose.Types.ObjectId();
        const Prescription =  new prescriptionSchema({
            _id: id,
            date: Date.now(),
            drugs: prescription
        });

        Prescription.save(err => {
           if (err) {
                reject(err);
            }
            resolve(id);
        });
    });
}