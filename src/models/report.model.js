var mongoose = require('mongoose');

var Report = new mongoose.Schema({

    id:{
        type:Number,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        requird:true,
        index:{unique:true}
    }
    
})

exports.modules = mongoose.model('Report', Report);