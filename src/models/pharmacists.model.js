var mongoose = require('mongoose');
require('mongoose-type-email');
var autoIncrement = require('mongoose-auto-increment-fix');

autoIncrement.initialize(mongoose);
var Pharmacist = new mongoose.Schema({
    id:{
        type:Number,
        
    },
    name:{
        type:String,
        required:true
    },
    nic:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    contact:{
        type:String,
        required:true
    },
    email:{
        type:mongoose.SchemaTypes.Email,
        allowBlank: true,
        required:true
    },
    username:{
        type:String,
        index:{unique:true}
    },
    password:{
        type:String,
        requird:true, 
    },
    role:{
        type:String,
        required:false
    }
});
Pharmacist.plugin(autoIncrement.plugin, {
    model: 'Pharmacist',
    field: 'id',
    startAt: 1,
    incrementBy: 1
});

mongoose.model('Pharmacist', Pharmacist);

module.exports = mongoose;
