// const mongoose = require('../models/report.model');

// const ReportSchema = mongoose.model('Report');

// var Reports =  ()=> {

//     //add a Report
//     this.addReport = (data)=>{
//         return new Promise((Resolve, Reject)=>{

//             const Report = new ReportSchema({
//                 // "id":data.id,
//                 // "name":data.name,
//                 // "type":data.type,
//                 // "password":data.password,
//                 // "Deleted":data.Deleted
//             });

//             Report.save().then(()=>{
//                 Resolve({status:200, message:"Report added.."});
//             }).catch((err)=>{
//                 Reject({status:500, message:"Error Occured: "+err});
//             });
            
//         });
//     };

//     //gets all Reports
//     this.getReports = ()=>{
//         return new Promise((Resolve,Reject)=>{

//                 ReportSchema.find().exec().then((data)=>{
//                     Resolve({status:200, message: data});
//                 }).catch((err)=>{
//                     Reject({status:500, message:"No data to retrieve "+err});
//                 });

//             });
//         };

//     //gets a Report by Report name
//     this.getReportByUName = (type)=>{
//         return new Promise((Resolve, Reject)=>{

//             ReportSchema.find({type:type}).exec().then((data)=>{
//                     Resolve({status:200, message:data});
//                 }).catch((err)=>{
//                     Reject({status:500, message:"Unable to find "+err});
//                 });

//         });
//     };
//     //get Report by exist
//     this.getReportByDeleted = (Deleted)=>{
//         return new Promise((Resolve, Reject)=>{

//                 ReportSchema.find({Deleted:Deleted}).exec().then((data)=>{
//                         Resolve({status:200, message:data});
//                     }).catch((err)=>{
//                         Reject({status:500, message:"Unable to find "+err});
//                     });

//             });
//     };
//     //get Report by name
//     this.getReportByName = (name)=>{
//         return new Promise((Resolve, Reject)=>{

//                 ReportSchema.find({name:name}).exec().then((data)=>{
//                         Resolve({status:200, message:data});
//                     }).catch((err)=>{
//                         Reject({status:500, message:"Unable to find "+err});
//                     });

//             });
//     };

//     //updates Report by type
//     this.UpdateReport = (type, data)=>{
//         return new Promise((Resolve,Reject)=>{
            
//             ReportSchema.update({type:type},data).exec().then(()=>{
//                 Resolve({status:200,message:"Report Updated"});
//             }).catch((err)=>{
//                 Reject({status:500, message:"Report not updated "+err});
//             });

//         });
//     };
//     //updates Report by id
//     this.UpdateReportByID = (id, data)=>{
//         return new Promise((Resolve,Reject)=>{

//             ReportSchema.update({id:id},data).exec().then(()=>{
//                 Resolve({status:200,message:"Report Updated"});
//             }).catch((err)=>{
//                 Reject({status:500, message:"Report not updated "+err});
//             });

//         });
//     };
//     this.deleteReport = (id) => {
//         // id = mongoose.Types.ObjectId(id);
// 		return new Promise(function(Resolve,Reject){
// 			ReportSchema.remove({id:id}).exec().then(()=>{
// 				Resolve({status : 200, message: "Report deleted"});
// 			}).catch(function(err){
// 				Reject({status : 500, message:"Report can not be deleted"});
// 			});
// 		});

// 	};


// };

// module.exports = new Reports;