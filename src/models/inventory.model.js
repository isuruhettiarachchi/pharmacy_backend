var mongoose=require('mongoose');

var inventorySchema=new mongoose.Schema({
    DrugID:{
        type:String,
        required:[true,'drugid is required']
    },
    batch:[{
        bacthID: String,
        required: [true, 'batchid required'],

        drugName: String,
        required: [true, 'drugname is required'],

        companyName: String,
        required: [true, 'companyName id is required'],

        receivedDate: String,
        required: [true, 'drugname is required'],

        expDate: String,
        required: [true, 'expdate is required'],

        manDate: String,
        required: [true, 'manDate is required'],

        qty: String,
        required: [true, 'qty is required'],

    }]

});

var Inventory=mongoose.model('Inventory',inventorySchema);

module.exports=Inventory;