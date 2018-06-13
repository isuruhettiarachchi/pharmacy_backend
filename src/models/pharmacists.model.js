var mongoose = require('mongoose');

var Pharmacist = new mongoose.Schema({
    id:{
        type:Number,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    username:{
        type:String,
        requird:true,
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
mongoose.model('Pharmacist', Pharmacist);

module.exports = mongoose;
