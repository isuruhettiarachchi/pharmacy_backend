var mongoose=require('mongoose');
var drugSchema = require('./drug.model')

var inventorySchema=new mongoose.Schema({
    DrugID:{
        type: mongoose.Schema.Types.ObjectId,
        ref: drugSchema,
        required:[true,'drugid is required']
    },
    batch:[{
        batchID:{
            type :String,
            required:[true,'OrderId isn required']
        },
        companyName:{
            type :String,
            required:[true,'OrderId isn required']
        },

        receivedDate:{
            type :String,
            required:[true,'OrderId isn required']
        },


        expDate:{
            type :String,
            required:[true,'OrderId isn required']
        },

        manDate:{
            type :String,
            required:[true,'OrderId isn required']
        },

        qty:{
            type :String,
            required:[true,'OrderId isn required']
        },

    }]

});

var Inventory=mongoose.model('Inventory',inventorySchema);

module.exports=Inventory;