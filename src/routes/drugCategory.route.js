var express = require('express')
var router = express.Router()

var drugCategory = require('../controllers/drugCategory.controller');

router.get('/view' , (req, res) => {
    drugCategory.getAllDrugCategories().then(response => {
        res.status(response.status).send(response);
    }).catch(err => {
        res.status(err.status).send(err);
    })
});

router.post('/add', (req, res) => {
    // console.log('b', req.body);
    drugCategory.addDrugCategory(req.body).then((response) => {
        console.log(response)
        res.status(response.status).send(response);
    }).catch(err => {
        console.log(err)
        res.status(err.status).send(err);
    });
});

router.put('/update/:drugCategoryId',(req,res)=>{
    drugCategory.updateDrugCategory(req.params.drugCategoryId, req.body).then((response)=>{
        console.log(response);
        res.status(response.status).send(response);
    }).catch(err=>{
        console.log(err)
        res.status(err.status).send(err)
    })
});

router.delete('/delete/:drugCategoryId',(req,res)=>{
    drugCategory.deleteDrugCategory(req.params.drugCategoryId).then((response)=>{
        console.log(response);
        res.status(response.status).send(response);
    }).catch(err=>{
        console.log(err)
        res.status(err.status).send(err)
    })
});

module.exports = router;