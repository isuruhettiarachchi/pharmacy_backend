var express=require('express');
var router=express.Router();
var bodyparser=require('body-parser');


router.post('/new',(req,res,next)=>{
    res.json({message:'hi'});
});

router.post('/pay/:id',(req,res,next)=>{
    res.json({message:'hi'});
});

router.get('/view/:id',(req,res,next)=>{
    res.send('hi');
});

router.put('/update/:id',(req,res,next)=>{

});

router.delete('/delete/:id',(req,res,next)=>{

});

module.exports=router;