var express=require('express');
var router=express.Router();

var Stock = require('../controllers/inventory.controller');


router.get('/viewall' , (req, res) => {
    Stock.getAllStock().then(response => {
        res.status(response.status).send(response);
    }).catch(err => {
        res.status(err.status).send(err);
    })
})

router.post('/new', (req, res) => {
   Stock.addStock(req.body).then((response) => {
        console.log(response)
        res.status(response.status).send(response);
    }).catch(err => {
        console.log(err)
        res.status(err.status).send(err)
    });
});


router.get('/view' , (req, res) => {
    Stock.getOneStock(req.query.drug_id,req.query.batch_id).then(response => {
        res.status(response.status).send(response);
    }).catch(err => {
        res.status(err.status).send(err);
    })
})

router.put('/update',(req,res,next)=>{
    Stock.updateStock(req.query.drug_id,req.query.batch_id).then((response)=>{
        console.log(response);
        res.status(response.status).send(response);
    }).catch(err=>{
        console.log(err)
        res.status(err.status).send(err)
    })
});


module.exports=router;