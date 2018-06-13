var mongoose=require('mongoose');

var orderSchema=new mongoose.Schema({
    orderID:{
        type :String,
        required:[true,'OrderId isn required']
    },
    orderDate:{
        type:String,
        required:[true,'orderDate is required']
    },
    dueDate:{
        type:String,
        required:[true,'due date is required']
    },
    items:{
            medicineID:{
                type:String,
                required:[true,'medicineID is required']
                },
            qty:{
                type:String,
            },
            company:{
                type:String,
                required:[true,'company is required']
        },
            unitPrice:String,
            subTotal:String,
        },
    supplier:{
        type:String,
        required:[true,'supplier required']
    },
    total:String,
    discount:String,

});

var Order=mongoose.model('Order',orderSchema);

module.exports=Order;