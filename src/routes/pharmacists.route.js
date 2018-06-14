// var express = require('express');
// var router = express.Router();

// var Controller = require('../controllers/pharamacists.controller');
// var ObjectID = require('mongodb').ObjectID;


// //get all pharmacists
// router.get('/' , (req, res) => {
//     // res.send('Welcome to pharmacist route')
//     Controller.getPharmacists().then((data)=>{
//         res.status(data.status).send({message:data.message})
//     }).catch((err)=>{
//         res.status(err.status).send({message:err.message})
//     })
// })

// //add a pharmacist
// router.post('/',(req, res)=>{
//     Controller.addPharmacist(req.body).then((data)=>{
//         res.status(data.status).send({message:data.message})
//     }).catch(
//         (err)=>{
//             res.status(err.status).send({message:err.messsage})
//         }
//     )
// })

// //get pharmacist by user name
// router.get('/username/:username',(req,res)=>{
//     Controller.getPharmacistByUName(req.params.username).then((data)=>{
//         res.status(data.status).send({message:data.message})
//     }).catch(
//         (err)=>{
//             res.status(err.status).send({message:err.message})
//         }
//     )
// })

// //gets pharmacists by role
// router.get('/role/:role',(req,res)=>{
//     Controller.getPharmacistByUName(req.params.role).then((data)=>{
//         res.status(data.status).send({message:data.message})
//     }).catch(
//         (err)=>{
//             res.status(err.status).send({message:err.message})
//         }
//     )
// })
// //gets pharmacist by name
// router.get('/name/:name',(req,res)=>{
//     Controller.getPharmacistByName(req.params.name).then((data)=>{
//         res.status(data.status).send({message:data.message})
//     }).catch(
//         (err)=>{
//             res.status(err.status).send({message:err.message})
//         }
//     )
// })

// //Update an Pharmacist by the id
// router.put('/id/:id', function(req,res){

// 	Controller.UpdatePharmacistByID(req.params.id, req.body).then(function(data){
// 		res.status(data.status).send({message:data.message})
// 	}).catch(function(err){
// 			res.status(err.status).send({message:err.message});
// 		});
// });
// //Update an Pharmacist by the username
// router.put('/username/:username', function(req,res){

// 	Controller.UpdatePharmacist(req.params.username, req.body).then(function(data){
// 		res.status(data.status).send({message:data.message})
// 	}).catch(function(err){
// 			res.status(err.status).send({message:err.message});
// 		});
// });

// //deletes pharmacist by username
// router.delete('/username/:username',(req,res)=>{
//     Controller.deletePharmacist(req.params.username).then((data)=>{
//         res.status(data.status).send({message:data.message})
//     }).catch(
//         (err)=>{
//             res.status(err.status).send({message:err.message})
//         }
//     )
// })


// module.exports = router;