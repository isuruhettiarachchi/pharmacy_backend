var mongoose=require('mongoose');

var autoIncrement = require('mongoose-auto-increment-fix');
autoIncrement.initialize(mongoose);

var orderSchema=new mongoose.Schema({

    orderID:{
        type :Number
    },

    orderDate:{
        type:String,
        required:[true,'orderDate is required']
    },

    items:[{
        medicineID: {
            type: String,
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
orderSchema.plugin(autoIncrement.plugin, {
    model: 'Pharmacist',
    field: 'orderID',
    startAt: 1,
    incrementBy: 1
});

var Order=mongoose.model('Order',orderSchema);

module.exports=Order;