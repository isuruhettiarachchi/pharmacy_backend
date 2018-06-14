var express = require('express');
var router = express.Router();

var Controller = require('../controllers/report.controller');
var ObjectID = require('mongodb').ObjectID;


//get all Report
router.get('/' , (req, res) => {
    // res.send('Welcome to Report route')
    Controller.getReports().then((data)=>{
        res.status(data.status).send({message:data.message})
    }).catch((err)=>{
        res.status(err.status).send({message:err.message})
    })
})

//add a Report
router.post('/',(req, res)=>{
    Controller.addReport(req.body).then((data)=>{
        res.status(data.status).send({message:data.message})
    }).catch(
        (err)=>{
            res.status(err.status).send({message:err.messsage})
        }
    )
})

//get Report by type
router.get('/type/:type',(req,res)=>{
    Controller.getReportByType(req.params.type).then((data)=>{
        res.status(data.status).send({message:data.message})
    }).catch(
        (err)=>{
            res.status(err.status).send({message:err.message})
        }
    )
})

//gets Report by exist
router.get('/deleted/:deleted',(req,res)=>{
    Controller.getReportByDeleted(req.params.deleted).then((data)=>{
        res.status(data.status).send({message:data.message})
    }).catch(
        (err)=>{
            res.status(err.status).send({message:err.message})
        }
    )
})
//gets Report by name
router.get('/name/:name',(req,res)=>{
    Controller.getReportByName(req.params.name).then((data)=>{
        res.status(data.status).send({message:data.message})
    }).catch(
        (err)=>{
            res.status(err.status).send({message:err.message})
        }
    )
})

//Update an Report by the id
router.put('/id/:id', function(req,res){

	Controller.UpdateReportByID(req.params.id, req.body).then(function(data){
		res.status(data.status).send({message:data.message})
	}).catch(function(err){
			res.status(err.status).send({message:err.message});
		});
});
//Update an Report by the type
router.put('/type/:type', function(req,res){

	Controller.UpdateReport(req.params.type, req.body).then(function(data){
		res.status(data.status).send({message:data.message})
	}).catch(function(err){
			res.status(err.status).send({message:err.message});
		});
});

//Update an Report by the id
router.put('/id/:id', function(req,res){

	Controller.UpdateReportByID(req.params.id, req.body).then(function(data){
		res.status(data.status).send({message:data.message})
	}).catch(function(err){
			res.status(err.status).send({message:err.message});
		});
});

//deletes Report by id
router.delete('/id/:id',(req,res)=>{
    Controller.deleteReport(req.params.id).then((data)=>{
        res.status(data.status).send({message:data.message})
    }).catch(
        (err)=>{
            res.status(err.status).send({message:err.message})
        }
    )
})


module.exports = router;