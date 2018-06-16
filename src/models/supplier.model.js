var mongoose=require('mongoose');

var autoIncrement = require('mongoose-auto-increment-fix');
autoIncrement.initialize(mongoose);

var supplierSchema=new mongoose.Schema({
    supplierID:{
        type:Number,
    },
    companyName:{
        type:String,
        required:[true,'company name is required']
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

supplierSchema.plugin(autoIncrement.plugin, {
    model: 'Pharmacist',
    field: 'supplierID',
    startAt: 1,
    incrementBy: 1
});

var Supplier=mongoose.model('Supplier',supplierSchema);


module.exports=Supplier;