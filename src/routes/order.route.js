var express=require('express');
var router=express.Router();
var bodyparser=require('body-parser');

var Order=require('../models/order.model');


router.post('/new',function (req,res,next) {
    var order=new Order(req.body);
    order.save().then(function () {
        res.send(order);
    }).catch(next)
});

router.post('/pay/:id',(req,res,next)=>{
    Order.find({orderID:req.params.id}).then((data)=>{
        data.orderStatus='Received/payed';
        order.findByIdAndUpdate({supplierID:req.params.id},data).then(function (data) {
            res.json(data);
        });

    });
});

router.get('/view',(req,res,next)=>{
    Order.find().then((data)=>{
       res.json(data);
    });
});

router.get('/view/:id',(req,res,next)=>{
    Order.find({orderID:req.params.id}).then((data)=>{
        res.json(data);
    });
});

router.put('/update/:id',(req,res,next)=>{
    Order.findByIdAndUpdate({orderID:req.params.id},req.body).then(function () {
        Order.findOne({orderID:req.params.id}).then(function (order) {
            res.send(order);
        });

    });
});

router.delete('/delete/:id',(req,res,next)=>{
    Order.findByIdAndRemove({orderID:req.params.id}).then(function (order) {
        res.send(order);
    });
});

module.exports=router;