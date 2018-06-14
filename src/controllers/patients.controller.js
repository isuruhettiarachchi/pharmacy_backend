var mongoose = require('mongoose');
var PatientSchema = require('../models/patients.model');

module.exports.addPatient = (patient) => {
    return new Promise((resolve, reject) => {
        const Patient =  new PatientSchema({
            _id: mongoose.Types.ObjectId(),
            paitentId: patient.id,
            name: patient.name,
            address: patient.address,
            NIC: patient.nic,
            dateOfBirth: patient.DOB,
            contactNumber: patient.number
        });

        Patient.save(err => {
            if (err) {
                reject({
                    status: 500,
                    error: err
                });
            }
            resolve({
                status: 200,
                message: 'patient added successfully'
            });
        });
    });
}
