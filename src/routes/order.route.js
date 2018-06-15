var express=require('express');
var router=express.Router();

var Order = require('../controllers/order.controller');


router.get('/viewall' , (req, res) => {
    Order.getAllOrders().then(response => {
        res.status(response.status).send(response);
    }).catch(err => {
        res.status(err.status).send(err);
    })
})



router.post('/new', (req, res) => {
    Order.addOrder(req.body).then((response) => {
        console.log(response)
        res.status(response.status).send(response);
    }).catch(err => {
        console.log(err)
        res.status(err.status).send(err)
    });
});


router.get('/view/:id' , (req, res) => {
    Order.getOneOrder(req.params.id).then(response => {
        res.status(response.status).send(response);
    }).catch(err => {
        res.status(err.status).send(err);
    })
})

router.put('/update/:id',(req,res,next)=>{
    Order.updateOrder(req.params.id,req.body).then((response)=>{
        console.log(response);
        res.status(response.status).send(response);
    }).catch(err=>{
        console.log(err)
        res.status(err.status).send(err)
    })
});

router.put('/delete/:id',(req,res,next)=>{
    Order.deleteOrder(req.params.id).then((response)=>{
        console.log(response);
        res.status(response.status).send(response);
    }).catch(err=>{
        console.log(err)
        res.status(err.status).send(err)
    })
});

module.exports=router;