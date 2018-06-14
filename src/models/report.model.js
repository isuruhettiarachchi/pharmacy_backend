var mongoose = require('mongoose');

var Report = new mongoose.Schema({

    id:{
        type:Number,
        required:true,
        index:{unique:true}
    },
    name:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    deleted:{
        type:Boolean,
        required:true
    },
    description:{
        type:String,
        requird:true
    }
    
});

mongoose.model('Report', Report);

module.exports = mongoose;