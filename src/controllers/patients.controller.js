var mongoose = require('mongoose');
var PatientSchema = require('../models/patients.model');

module.exports.getAllPatients = () => {
    return new Promise((resolve, reject) => {
        PatientSchema.find().exec().then(result => {
            resolve({
                status: 200,
                patients: result
            });
        }).catch(err => {
            reject({
                status: 500,
                error: err
            });
        }) ;
    });
}

module.exports.addPatient = (patient) => {
    console.log('patient ', patient)
    return new Promise((resolve, reject) => {
        const Patient =  new PatientSchema({
            _id: mongoose.Types.ObjectId(),
            name: patient.name,
            address: patient.address,
            NIC: patient.nic,
            dateOfBirth: patient.DOB,
            contactNumber: patient.number
        });

        Patient.save(err => {
            console.log('a', err);
            
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

module.exports.removePatient = (id) => {
    return new Promise((resolve, reject) => {
        PatientSchema.findByIdAndRemove(id, (err, res) => {
            if (err) {
                reject({
                    status: 500,
                    error: err
                });
            }
            resolve({
                status: 200,
                message: 'patient removed successfully',
                patients: res
            })
        })
    })
}

module.exports.updatePatient = (patientId, patient) => {
    return new Promise((resolve, reject) => {
        PatientSchema.update({_id: patientId}, {$set: patient}).then(() => {
            resolve({
                status: 200,
                message: 'Patient updated successfully'
            });
        }).catch(err => {
            reject({
                status: 500,
                err: err
            })
        })
    })
}
