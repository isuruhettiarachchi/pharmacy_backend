var mongoose=require('mongoose');
var drugSchema = require('./drug.model')

var autoIncrement = require('mongoose-auto-increment-fix');
autoIncrement.initialize(mongoose);

var inventorySchema=new mongoose.Schema({
    DrugID:{
        type: mongoose.Schema.Types.ObjectId,
        ref: drugSchema,
        required:[true,'drugid is required']
    },
    batch:[{

        batchID:{
            type :Number
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
        }

    }]

});

inventorySchema.plugin(autoIncrement.plugin, {
    model: 'Inventory',
    field: 'batchID',
    startAt: 1,
    incrementBy: 1
});

var Inventory=mongoose.model('Inventory',inventorySchema);

module.exports=Inventory;