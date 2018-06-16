var mongoose = require('mongoose')
var patientSchema = require('../models/patients.model')
var prescriptionsModel = require('../models/prescriptions.model')
var drugsModel = require('../models/drug.model')
var patientPrescriptionSchema = require('../models/patientPrescriptions.model')

module.exports.addNewPrescription = (patient, prescription) => {
    console.log('f7', patient, prescription)
    return new Promise((resolve, reject) => {
        patientPrescriptionSchema.findOne({ patient: patient }).exec().then(res => {
            console.log('f2',res.prescriptions)
            console.log('f5',prescription)
            let newPrescriptions = res.prescriptions
            console.log('f6', newPrescriptions)
            newPrescriptions.push(prescription)
            patientPrescriptionSchema.findByIdAndUpdate({ _id: res._id }, { prescriptions: newPrescriptions }).exec().then(() => {
                resolve({
                    status: 200,
                    message: 'prescription added successfully'
                })
            }).catch((err) => {
                console.log('f3',err)
                reject({
                    status: 500,
                    err: err
                });
            });
        }).catch((err) => {
            console.log('f4',err)
            const newPrescriptionObj = new patientPrescriptionSchema({
                _id: new mongoose.Types.ObjectId(),
                patient: patient,
                prescriptions: prescription
            });

            newPrescriptionObj.save(err => {
                if (err) {
                    reject({
                        status: 500,
                        err: err
                    })
                }
                resolve({
                    status: 200,
                    message: 'prescription added successfully'
                })
            })
        })
    })
}

module.exports.findAllPrescriptionsForPatient = (patient) => {
    console.log(patient)
    return new Promise((resolve, reject) => {
        patientPrescriptionSchema.
            findOne({ patient: patient }).
            populate({ path: 'patient', model: patientSchema }).
            populate({ path: 'prescriptions', model: prescriptionsModel, populate: { path: 'drugs', model: drugsModel } }).
            exec().then(res => {
            resolve({
                status: 200,
                message: 'all prescriptions for the patient',
                prescription: res
            });
        }).catch(err => {
            console.log(err)
            reject({
                status: 500,
                err: err
            })
        })
    })
}