const mongoose = require('mongoose');


const userinfoSchema = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    user : {type:mongoose.Schema.Types.ObjectId,require:true,ref:'User'},
    name : {type:String,require:true},
    dateofbirth:{type:Date,require:true},
    mobile_phone : {type:String,require:true},
    gender:{type:Boolean,require:true},
    create_at:{type:Date,require:true,default:Date.now}
})


module.exports = mongoose.model('User_Info',userinfoSchema)