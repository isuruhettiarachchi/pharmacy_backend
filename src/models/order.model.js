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

    items:[{
        medicineID: {
            type: String,
            required: [true, 'medicineID is required']
        },
        qty: {
            type: String,
        }
    }],
    supplier:{
        type:String,
        required:[true,'supplier required']
    },

});

var Order=mongoose.model('Order',orderSchema);

module.exports=Order;