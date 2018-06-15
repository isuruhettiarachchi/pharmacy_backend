var express = require('express')
var router = express.Router()

var drug = require('../controllers/drug.controller');

router.get('/view' , (req, res) => {
    drug.getAllDrugs().then(response => {
        res.status(response.status).send(response);
    }).catch(err => {
        res.status(err.status).send(err);
    })
});

router.get('/byCategory/:catId' , (req, res) => {
    drug.getDrugsByCategory(req.params.catId).then(response => {
        res.status(response.status).send(response);
    }).catch(err => {
        res.status(err.status).send(err);
    })
})

router.post('/add', (req, res) => {
    // console.log('b', req.body);
    drug.addDrug(req.body).then((response) => {
        console.log(response)
        res.status(response.status).send(response);
    }).catch(err => {
        console.log(err)
        res.status(err.status).send(err);
    });
});

router.put('/update/:drugId',(req,res)=>{
    drug.updateDrug(req.params.drugId, req.body).then((response)=>{
        console.log(response);
        res.status(response.status).send(response);
    }).catch(err=>{
        console.log(err)
        res.status(err.status).send(err)
    })
});

router.delete('/delete/:drugId',(req,res)=>{
    drug.deleteDrug(req.params.drugId).then((response)=>{
        console.log(response);
        res.status(response.status).send(response);
    }).catch(err=>{
        console.log(err)
        res.status(err.status).send(err)
    })
});

module.exports = router;