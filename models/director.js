const mongoose = require('mongoose');

const directorSchema = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    full_name:{type:String,require:true},
    dateofbirth:{type:Date,require:true},
    mobile_phone:{type:String,require:true}
})

module.exports = mongoose.model('Director',directorSchema);