var mongoose=require('mongoose');

var supplierSchema=new mongoose.Schema({
    supplierID:{
        type:String,
        required:[true,'supplier id is required']
    },
    companyName:{
        type:String,
        required:[true,'companyName id is required']
    },
    contactNo:{
        type:String,
        required:[true,'contactNo id is required']
    },
    address:{
        type:String,
        required:[true,'address id is required']
    },
    email:{
        type:String,
        required:[true,'email id is required']
    },
    country:{
        type:String,
        required:[true,'country id is required']
    }
});

var Supplier=mongoose.model('Supplier',supplierSchema);

module.exports=Supplier;