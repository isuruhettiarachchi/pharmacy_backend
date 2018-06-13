var express=require('express');
var router=express.Router();
var bodyparser=require('body-parser');

var Supplier=require('../models/supplier.model');

router.get('/viewall',(req,res,next)=>{
    Supplier.find().then((data)=>{
        res.json(data);
    });
});

router.post('/new',(req,res,next)=>{
    var supplier=new Supplier(req.body);
    Supplier.save().then(function () {
        res.send(order);
    }).catch(next)
});

router.get('/view/:id',(req,res,next)=>{
    Supplier.find({supplierID:req.params.id}).then((data)=>{
        res.json(data);
    });
});

router.put('/update/:id',(req,res,next)=>{
    Supplier.findByIdAndUpdate({supplierID:req.params.id},req.body).then(function () {
        Order.findOne({supplierID:req.params.id}).then(function (order) {
            res.send(order);
        });

    });
});

router.delete('/delete/:id',(req,res,next)=>{
    Supplier.findByIdAndRemove({supplierID:req.params.id}).then(function (order) {
        res.send(order);
    });
});

module.exports=router;