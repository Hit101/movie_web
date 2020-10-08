const mongoose = require('mongoose');

const genderSchema = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    type:{type:String,require:true}
})

module.exports = mongoose.model('Gender',genderSchema);