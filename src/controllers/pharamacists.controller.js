const mongoose = require('../models/pharmacists.model');
const PharmacistsSchema = mongoose.modules('Pharmacist');

var Pharmacists = () => {

    //add a pharmacist
    this.addPharmacist = (data)=>{
        return new Promise((Resolve, Reject)=>{
            const Pharmacist = new PharmacistsSchema({
                "id":data.id,
                "name":data.name,
                "username":data.username,
                "password":data.password,
                "role":data.role
            })
            Pharmacist.save().then(()=>{
                Resolve({status:200, message:"Pharmacist added.."});
            }).catch((err)=>{
                Reject({status:500, message:"Error Occured: "+err});
            });
        })
    }

    //gets all pharmacists
    this.getPharmacists = ()=>{
        return new Promise(
            (Resolve,Reject)=>{
                PharmacistsSchema.find().exec().then((data)=>{
                    Resolve({status:200, message: data})
                }).catch((err)=>{
                    Reject({status:500, message:"No data to retrieve "+err})
                })
            }
        )
    }
    //gets a pharmacist by user name
    this.getPharmacistByUName = (username)=>{
        return new Promise((resolve, reject)=>{
            PharmacistsSchema.find({username:username}).exec().then(
                (data)=>{
                    Resolve({status:200, message:data})
                }
            ).catch(
                (err)=>{
                    Reject({status:500, message:"Unable to find "+err})
                }
            )
        })
    }
    //get pharmacist by role
    this.getPharmacistByRole = (role)=>{
        return new Promise(
            (resolve, reject)=>{
                PharmacistsSchema.find({role:role}).exec().then(
                    (data)=>{
                        Resolve({status:200, message:data})
                    }
                ).catch(
                    (err)=>{
                        Reject({status:500, message:"Unable to find "+err})
                    }
                )
            }
        )
    }
    //get pharmacist by name
    this.getPharmacistByName = (name)=>{
        return new Promise(
            (resolve, reject)=>{
                PharmacistsSchema.find({name:name}).exec().then(
                    (data)=>{
                        Resolve({status:200, message:data})
                    }
                ).catch(
                    (err)=>{
                        Reject({status:500, message:"Unable to find "+err})
                    }
                )
            }
        )
    }

    //updates pharmacist by username
    this.UpdatePharmacist = (username, data)=>{
        return new Promise((Resolve,Reject)=>{
            PharmacistsSchema.update({username:username},data).exec().then(()=>{
                Resolve({status:200,message:"Pharmacist Updated"})
            }).catch((err)=>{
                Reject({status:500, message:"User not updated "+err})
            })
        })
    }
    //updates pharmacist by id
    this.UpdatePharmacistByID = (id, data)=>{
        return new Promise((Resolve,Reject)=>{
            PharmacistsSchema.update({id:id},data).exec().then(()=>{
                Resolve({status:200,message:"Pharmacist Updated"})
            }).catch((err)=>{
                Reject({status:500, message:"User not updated "+err})
            })
        })
    }
    this.deletePharmacist = (username) => {
        // id = mongoose.Types.ObjectId(id);
		return new Promise(function(Resolve,Reject){
			CustomerSchema.remove({username:username}).exec().then(function(){
				Resolve({status : 200, message: "Pharmacist deleted"})
			}).catch(function(err){
					Reject({status : 500, message:"Pharmacist can not be deleted"});
				});
			});

	};


}

module.exports = new Pharmacists();